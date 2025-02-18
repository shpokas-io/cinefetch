import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--bg-color)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#4ade80" }}
        >
          CineFetch
        </div>
        <div
          style={{
            position: "relative",
            width: "40px",
            height: "20px",
            backgroundColor: isDark ? "#4b5563" : "#d1d5db",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={toggleTheme}
        >
          <div
            style={{
              position: "absolute",
              top: "2px",
              left: isDark ? "20px" : "2px",
              width: "16px",
              height: "16px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              transition: "left 0.2s",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <select
          style={{
            backgroundColor: isDark ? "#374151" : "#e5e7eb",
            color: "var(--text-color)",
            border: "none",
            padding: "0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          <option>No sort</option>
          <option>Name ascending</option>
          <option>Name descending</option>
          <option>Premiered ascending</option>
          <option>Premiered descending</option>
        </select>
        <select
          style={{
            backgroundColor: isDark ? "#374151" : "#e5e7eb",
            color: "var(--text-color)",
            border: "none",
            padding: "0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          <option>Genres filter</option>
          <option>Action</option>
          <option>Crime</option>
          <option>Drama</option>
          <option>Thriller</option>
        </select>
        <select
          style={{
            backgroundColor: isDark ? "#374151" : "#e5e7eb",
            color: "var(--text-color)",
            border: "none",
            padding: "0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          <option>Status filter</option>
          <option>All</option>
          <option>Ended</option>
          <option>Running</option>
        </select>
      </div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <a
          href="#"
          style={{ textDecoration: "none", color: "var(--text-color)" }}
        >
          HOME
        </a>
        <a
          href="#"
          style={{ textDecoration: "none", color: "var(--text-color)" }}
        >
          FAVORITES
        </a>
      </nav>
    </header>
  );
};

export default Header;
