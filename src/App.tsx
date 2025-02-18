import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="theme-transition"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "var(--button-bg)",
          color: "var(--button-text)",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
        onMouseOver={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor =
            "var(--button-hover)";
        }}
        onMouseOut={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor =
            "var(--button-bg)";
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
