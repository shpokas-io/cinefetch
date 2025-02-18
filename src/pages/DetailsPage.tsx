// src/pages/ShowDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getShowById, Show } from "../services/tvShows";
import Layout from "../components/Layout";
import Button from "../components/Button";

const ShowDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState<Show | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShow = async () => {
      try {
        if (!id) return;
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

  if (loading) {
    return (
      <Layout>
        <div className="p-4">Loading show details...</div>
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

  if (!show) {
    return (
      <Layout>
        <div className="p-4 text-red-500">Show not found.</div>
      </Layout>
    );
  }

  const cleanSummary = show.summary
    ? show.summary.replace(/<[^>]+>/g, "")
    : "No description available.";
  const poster = show.image
    ? show.image.original
    : "https://via.placeholder.com/500x750";
  const displayRating =
    show.rating && show.rating.average ? show.rating.average : "N/A";

  return (
    <Layout>
      <div className="p-4 flex flex-col gap-6">
        <div className="flex justify-start">
          <Button onClick={() => navigate(-1)} className="px-3 py-1 text-sm">
            Back
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={poster}
            alt={show.name}
            className="w-full md:w-96 object-cover border border-gray-300 rounded shadow"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{show.name}</h2>
            <p className="text-sm">{cleanSummary}</p>
            <div className="text-sm text-gray-400 flex flex-col gap-1">
              <span>Premiere: {show.premiered ? show.premiered : "N/A"}</span>
              <span>Ended: {show.ended ? show.ended : "N/A"}</span>
              <span>
                Runtime: {show.runtime ? show.runtime : "N/A"} minutes
              </span>
              <span>Language: {show.language ? show.language : "N/A"}</span>
              <span>Rating: {displayRating} / 10</span>
              <span>
                Genres: {show.genres.length ? show.genres.join(", ") : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowDetails;
