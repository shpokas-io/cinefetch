import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import FilterDropdown from "./FilterDropdown";
import { SORT_OPTIONS, GENRES, STATUSES } from "../../constants/filters";

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
  const { isDark } = useTheme();
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
