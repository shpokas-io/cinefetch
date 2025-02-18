import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

const Header: React.FC = () => (
  <header
    style={{
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "var(--bg-color)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    }}
  >
    <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>CineFetch</div>
    <nav style={{ display: "flex", gap: "1rem" }}>
      <a
        href="#"
        style={{ textDecoration: "none", color: "var(--text-color)" }}
      >
        Home
      </a>
      <a
        href="#"
        style={{ textDecoration: "none", color: "var(--text-color)" }}
      >
        Browse
      </a>
      <a
        href="#"
        style={{ textDecoration: "none", color: "var(--text-color)" }}
      >
        About
      </a>
    </nav>
    <ThemeToggle />
  </header>
);

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <Button onClick={toggleTheme}>{isDark ? "Light Mode" : "Dark Mode"}</Button>
  );
};

export default Header;
