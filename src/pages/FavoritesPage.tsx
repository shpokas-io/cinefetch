import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Show, getAllShows } from "../services/tvShows";
import Card from "../components/Card";
import { useFavorites } from "../context/FavoriteContext";

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFavoriteShows = async () => {
      try {
        const allShows = await getAllShows();
        const favoriteShows = allShows.filter((show) =>
          favorites.includes(show.id)
        );
        setShows(favoriteShows);
      } catch {
        setError("Failed to fetch favorite shows.");
      } finally {
        setLoading(false);
      }
    };
    fetchFavoriteShows();
  }, [favorites]);

  if (loading) {
    return (
      <Layout>
        <div className="p-4">Loading favorites...</div>
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
      <div className="p-4">
        <h2 className="text-xl mb-4">Favorites</h2>
        {shows.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {shows.map((show) => (
              <Card key={show.id} show={show} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
