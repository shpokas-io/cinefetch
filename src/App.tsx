import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    <Header />
    <main style={{ flex: 1 }}>
      <Home />
    </main>
    <Footer />
  </div>
);

export default App;
