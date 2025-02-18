import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Filters: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const bgClass = isDark ? "bg-gray-700" : "bg-gray-200";

  return (
    <div className="px-4 pb-4 flex flex-wrap gap-4 justify-center">
      <select
        className={`${bgClass} text-[var(--text-color)] border-none py-2 px-3 rounded`}
      >
        <option>No sort</option>
        <option>Name ascending</option>
        <option>Name descending</option>
        <option>Premiered ascending</option>
        <option>Premiered descending</option>
      </select>
      <select
        className={`${bgClass} text-[var(--text-color)] border-none py-2 px-3 rounded`}
      >
        <option>Genres filter</option>
        <option>Action</option>
        <option>Crime</option>
        <option>Drama</option>
        <option>Thriller</option>
      </select>
      <select
        className={`${bgClass} text-[var(--text-color)] border-none py-2 px-3 rounded`}
      >
        <option>Status filter</option>
        <option>All</option>
        <option>Ended</option>
        <option>Running</option>
      </select>
    </div>
  );
};

export default Filters;
