import { Option } from "../types/filterTypes";

export const SORT_OPTIONS: Option[] = [
  { value: "name-asc", label: "Name ↑" },
  { value: "name-desc", label: "Name ↓" },
  { value: "premiered-asc", label: "Premiered ↑" },
  { value: "premiered-desc", label: "Premiered ↓" },
];

export const GENRES: string[] = [
  "Action",
  "Crime",
  "Science-Fiction",
  "Drama",
  "Thriller",
  "Espionage",
  "Music",
  "Romance",
];

export const STATUSES: string[] = ["Ended", "Running", "To be Determined"];
