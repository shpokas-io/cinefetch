import React from "react";
import Home from "./pages/Home";

const App: React.FC = () => (
  <div className="theme-transition bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen flex flex-col">
    <Home />
  </div>
);

export default App;
