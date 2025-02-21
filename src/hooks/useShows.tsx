import { useState, useEffect } from "react";
import { getAllShows, Show } from "../services/tvShows";

export const useShows = () => {
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

  return { shows, loading, error };
};
