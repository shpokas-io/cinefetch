import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Filters: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const selectStyle = {
    backgroundColor: isDark ? "#374151" : "#e5e7eb",
    color: "var(--text-color)",
    border: "none",
    padding: "0.5rem",
    borderRadius: "0.25rem",
  };

  return (
    <div
      style={{
        padding: "0 1rem 1rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <select style={selectStyle}>
        <option>No sort</option>
        <option>Name ascending</option>
        <option>Name descending</option>
        <option>Premiered ascending</option>
        <option>Premiered descending</option>
      </select>
      <select style={selectStyle}>
        <option>Genres filter</option>
        <option>Action</option>
        <option>Crime</option>
        <option>Drama</option>
        <option>Thriller</option>
      </select>
      <select style={selectStyle}>
        <option>Status filter</option>
        <option>All</option>
        <option>Ended</option>
        <option>Running</option>
      </select>
    </div>
  );
};

export default Filters;
