import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="p-4 flex items-center justify-between bg-[var(--bg-color)]">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-[#4ade80]">CineFetch</div>
        <div
          onClick={toggleTheme}
          className={`relative w-10 h-5 rounded-full cursor-pointer ${
            isDark ? "bg-[#4b5563]" : "bg-[#d1d5db]"
          }`}
        >
          <div
            className={`absolute top-[2px] w-4 h-4 bg-white rounded-full transition-all ${
              isDark ? "left-[20px]" : "left-[2px]"
            }`}
          />
        </div>
      </div>
      <nav className="flex gap-4">
        <a href="#" className="no-underline text-[var(--text-color)]">
          HOME
        </a>
        <a href="#" className="no-underline text-[var(--text-color)]">
          FAVORITES
        </a>
      </nav>
    </header>
  );
};

export default Header;
