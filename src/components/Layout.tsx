import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
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
    <Filters />
    <main style={{ flex: 1 }}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
