import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const Brand: React.FC = () => (
  <div className="text-2xl font-bold text-[#4ade80]">CineFetch</div>
);

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-10 h-5 rounded-full cursor-pointer p-0 border-0 focus:outline-none ${
        isDark ? "bg-[#4b5563]" : "bg-[#d1d5db]"
      }`}
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-[2px] w-4 h-4 bg-white rounded-full transition-all ${
          isDark ? "left-[20px]" : "left-[2px]"
        }`}
      />
    </button>
  );
};

const NavigationLink: React.FC<{ to: string; label: string }> = memo(
  ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-[#4ade80] border-b-2 border-[#4ade80] no-underline"
          : "text-[var(--text-color)] no-underline"
      }
    >
      {label}
    </NavLink>
  )
);

const Header: React.FC = () => (
  <header className="p-4 flex items-center justify-between bg-[var(--bg-color)]">
    <div className="flex items-center gap-3">
      <Brand />
      <ThemeToggle />
    </div>
    <nav className="flex gap-4">
      <NavigationLink to="/" label="HOME" />
      <NavigationLink to="/favorites" label="FAVORITES" />
    </nav>
  </header>
);

export default Header;
