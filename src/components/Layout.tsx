import React from "react";
import Header from "./Header";
import Filters from "./Filters";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] theme-transition">
    <Header />
    <Filters />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default Layout;
