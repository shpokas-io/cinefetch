import React, { useEffect, useState, useMemo, useCallback } from "react";
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
  const [selectedStatus, setSelectedStatus] = useState<string>("");

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

  const filteredShows = useMemo(() => {
    return shows.filter((show) => {
      if (
        selectedGenres.length > 0 &&
        !selectedGenres.some((genre) => show.genres.includes(genre))
      ) {
        return false;
      }
      if (selectedStatus && show.status !== selectedStatus) {
        return false;
      }
      return true;
    });
  }, [shows, selectedGenres, selectedStatus]);

  const sortedShows = useMemo(() => {
    const copy = [...filteredShows];
    if (!sortValue) return copy;
    if (sortValue === "name-asc")
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    if (sortValue === "name-desc")
      return copy.sort((a, b) => b.name.localeCompare(a.name));
    if (sortValue === "premiered-asc")
      return copy.sort((a, b) =>
        (a.premiered ?? "").localeCompare(b.premiered ?? "")
      );
    if (sortValue === "premiered-desc")
      return copy.sort((a, b) =>
        (b.premiered ?? "").localeCompare(a.premiered ?? "")
      );
    return copy;
  }, [filteredShows, sortValue]);

  const totalPages = useMemo(
    () => Math.ceil(sortedShows.length / ITEMS_PER_PAGE),
    [sortedShows]
  );

  const paginatedShows = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedShows.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedShows, currentPage]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

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
        selectedStatus={selectedStatus}
        onSortChange={setSortValue}
        onGenreChange={(value) =>
          setSelectedGenres((prev) =>
            prev.includes(value)
              ? prev.filter((v) => v !== value)
              : [...prev, value]
          )
        }
        onStatusChange={setSelectedStatus}
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
