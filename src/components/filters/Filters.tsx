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

interface FiltersProps {
  sortValue: string;
  selectedGenres: string[];
  selectedStatuses: string[];
  onSortChange: (value: string) => void;
  onGenreChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  sortValue,
  selectedGenres,
  selectedStatuses,
  onSortChange,
  onGenreChange,
  onStatusChange,
}) => {
  const { isDark } = useContext(ThemeContext);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDropdown = (name: string) =>
    setOpenDropdown((prev) => (prev === name ? null : name));
  return (
    <div className="px-4 pb-4 flex flex-wrap gap-4 justify-center">
      <FilterDropdown
        placeholder="Sort filter"
        isOpen={openDropdown === "sort"}
        onToggle={() => toggleDropdown("sort")}
        options={SORT_OPTIONS}
        multi={false}
        selected={sortValue}
        onSelect={(value: string) => {
          onSortChange(value);
          setOpenDropdown(null);
        }}
        isDark={isDark}
      />
      <FilterDropdown
        placeholder="Genres filter"
        isOpen={openDropdown === "genres"}
        onToggle={() => toggleDropdown("genres")}
        options={GENRES}
        multi={true}
        selected={selectedGenres}
        onSelect={onGenreChange}
        isDark={isDark}
      />
      <FilterDropdown
        placeholder="Status filter"
        isOpen={openDropdown === "status"}
        onToggle={() => toggleDropdown("status")}
        options={STATUSES}
        multi={true}
        selected={selectedStatuses}
        onSelect={onStatusChange}
        isDark={isDark}
      />
    </div>
  );
};

export default Filters;
