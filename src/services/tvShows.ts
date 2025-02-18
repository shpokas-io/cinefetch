import axios from "axios";

export interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  rating: {
    average: number | null;
  };
  genres: string[];
  status: string;
  premiered: string | null;
  ended: string | null;
}

export const getAllShows = async (): Promise<Show[]> => {
  const response = await axios.get<Show[]>("https://api.tvmaze.com/shows");
  return response.data;
};
