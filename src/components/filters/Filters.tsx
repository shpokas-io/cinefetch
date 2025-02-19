import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import FilterDropdown from "./FilterDropdown";
import { Option } from "../../types/filterTypes";

const SORT_OPTIONS: Option[] = [
  { value: "name-asc", label: "Name ↑" },
  { value: "name-desc", label: "Name ↓" },
  { value: "premiered-asc", label: "Premiered ↑" },
  { value: "premiered-desc", label: "Premiered ↓" },
];

const GENRES: string[] = [
  "Action",
  "Crime",
  "Science-Fiction",
  "Drama",
  "Thriller",
  "Espionage",
  "Music",
  "Romance",
];

const STATUSES: string[] = ["Ended", "Running", "To be Determined"];

const Filters: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sortValue, setSortValue] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const toggleDropdown = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));
  const handleSortSelect = (value: string) => {
    setSortValue(value);
    setOpenDropdown(null);
  };
  const handleGenreSelect = (value: string) =>
    setSelectedGenres((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  const handleStatusSelect = (value: string) =>
    setSelectedStatuses((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  const containerClass = "px-4 pb-4 flex flex-wrap gap-4 justify-center";
  return (
    <div className={containerClass}>
      <FilterDropdown
        placeholder="Sort filter"
        isOpen={openDropdown === "sort"}
        onToggle={() => toggleDropdown("sort")}
        options={SORT_OPTIONS}
        multi={false}
        selected={sortValue}
        onSelect={handleSortSelect}
        isDark={isDark}
      />
      <FilterDropdown
        placeholder="Genres filter"
        isOpen={openDropdown === "genres"}
        onToggle={() => toggleDropdown("genres")}
        options={GENRES}
        multi={true}
        selected={selectedGenres}
        onSelect={handleGenreSelect}
        isDark={isDark}
      />
      <FilterDropdown
        placeholder="Status filter"
        isOpen={openDropdown === "status"}
        onToggle={() => toggleDropdown("status")}
        options={STATUSES}
        multi={true}
        selected={selectedStatuses}
        onSelect={handleStatusSelect}
        isDark={isDark}
      />
    </div>
  );
};

export default Filters;
