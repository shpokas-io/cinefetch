import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Card from "../components/Card";

interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
}

const Home: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get<Show[]>(
          "https://api.tvmaze.com/shows"
        );
        setShows(response.data);
        setLoading(false);
      } catch {
        setError("Failed to fetch shows.");
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="p-4">Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="p-4 text-red-500">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
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
