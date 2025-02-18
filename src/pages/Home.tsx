import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getAllShows, Show } from "../services/tvShows";
import Card from "../components/Card";

const Home: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        {shows.slice(0, 10).map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
