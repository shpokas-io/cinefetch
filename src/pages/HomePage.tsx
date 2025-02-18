import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAllShows, Show } from "../services/tvShows";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 8;

const Home: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const totalPages = Math.ceil(shows.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedShows = shows.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <Layout showFilters>
        <div className="p-4">Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout showFilters>
        <div className="p-4 text-red-500">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout showFilters>
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
