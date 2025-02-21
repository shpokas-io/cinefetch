import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Show } from "../services/tvShows";
import { useFavorites } from "../context/FavoriteContext";

interface CardProps {
  show: Show;
}

const Card: React.FC<CardProps> = ({ show }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(show.id);
  const { id, name, image, summary, rating, genres } = show;
  const cleanSummary = summary
    ? summary.replace(/<[^>]+>/g, "")
    : "No description available.";
  const truncatedSummary =
    cleanSummary.length > 120
      ? cleanSummary.substring(0, 120) + "..."
      : cleanSummary;
  const poster = image ? image.medium : "https://via.placeholder.com/250x150";
  const displayRating = rating && rating.average ? rating.average : "N/A";
  return (
    <div
      onClick={() => navigate(`/shows/${id}`)}
      className="relative bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-transform"
    >
      <img src={poster} alt={name} className="w-full md:w-48 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(id);
          }}
          className="absolute top-2 right-2 text-green-500 hover:text-green-400 transition"
        >
          {isFavorite ? (
            <AiFillHeart size={24} />
          ) : (
            <AiOutlineHeart size={24} />
          )}
        </button>
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm mb-4">{truncatedSummary}</p>
        <div className="mt-auto flex items-center justify-between text-sm text-gray-400">
          <span>Rating: {displayRating} / 10</span>
          <span>{genres.length ? genres.join(", ") : "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
