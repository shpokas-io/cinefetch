import React from "react";

import Home from "./pages/Home";

const App: React.FC = () => (
  <div
    className="theme-transition"
    style={{
      backgroundColor: "var(--bg-color)",
      color: "var(--text-color)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Home />
  </div>
);

export default App;
