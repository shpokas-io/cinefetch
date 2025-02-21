import { Option } from "../types/filterTypes";

export const SORT_OPTIONS: Option[] = [
  { value: "", label: "No Sort" },
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

export const STATUSES: Option[] = [
  { value: "Ended", label: "Ended" },
  { value: "Running", label: "Running" },
  { value: "To be Determined", label: "To be Determined" },
];
