import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { getAllShows, Show } from "../services/tvShows";

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
      <div className="p-4 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {shows.map((show) => (
          <Card
            key={show.id}
            title={show.name}
            image={
              show.image
                ? show.image.medium
                : "https://via.placeholder.com/250x150"
            }
            description={
              show.summary
                ? show.summary.replace(/<[^>]+>/g, "")
                : "No description available."
            }
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
