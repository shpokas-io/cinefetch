import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAllShows, Show } from "../services/tvShows";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Filters from "../components/filters/Filters";

const ITEMS_PER_PAGE = 8;

const Home: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllShows();
        setShows(data);
      } catch {
        setError("Failed to fetch shows.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const filteredShows = shows.filter((show) => {
    if (
      selectedGenres.length > 0 &&
      !selectedGenres.some((genre) => show.genres.includes(genre))
    )
      return false;
    if (selectedStatuses.length > 0 && !selectedStatuses.includes(show.status))
      return false;
    return true;
  });
  const sortedShows = [...filteredShows].sort((a, b) => {
    if (!sortValue) return 0;
    if (sortValue === "name-asc") return a.name.localeCompare(b.name);
    if (sortValue === "name-desc") return b.name.localeCompare(a.name);
    if (sortValue === "premiered-asc")
      return (a.premiered ?? "").localeCompare(b.premiered ?? "");
    if (sortValue === "premiered-desc")
      return (b.premiered ?? "").localeCompare(a.premiered ?? "");
    return 0;
  });
  const totalPages = Math.ceil(sortedShows.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedShows = sortedShows.slice(startIndex, endIndex);
  const handlePageChange = (page: number) => setCurrentPage(page);
  if (loading)
    return (
      <Layout>
        <div className="p-4">Loading...</div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div className="p-4 text-red-500">{error}</div>
      </Layout>
    );
  return (
    <Layout>
      <Filters
        sortValue={sortValue}
        selectedGenres={selectedGenres}
        selectedStatuses={selectedStatuses}
        onSortChange={setSortValue}
        onGenreChange={(value) =>
          setSelectedGenres((prev) =>
            prev.includes(value)
              ? prev.filter((v) => v !== value)
              : [...prev, value]
          )
        }
        onStatusChange={(value) =>
          setSelectedStatuses((prev) =>
            prev.includes(value)
              ? prev.filter((v) => v !== value)
              : [...prev, value]
          )
        }
      />
      <div className="p-4 grid gap-6 md:grid-cols-2">
        {paginatedShows.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default Home;
