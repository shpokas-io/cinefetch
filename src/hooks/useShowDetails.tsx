import { useState, useEffect } from "react";
import { getShowById, Show } from "../services/tvShows";

export const useShowDetails = (id: string | undefined) => {
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No show ID provided.");
      setLoading(false);
      return;
    }
    const fetchShow = async () => {
      try {
        const data = await getShowById(id);
        setShow(data);
      } catch {
        setError("Failed to fetch show details.");
      } finally {
        setLoading(false);
      }
    };
    fetchShow();
  }, [id]);

  return { show, loading, error };
};
