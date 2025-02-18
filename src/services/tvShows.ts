import axios from "axios";

export interface Show {
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
}

export const getAllShows = async (): Promise<Show[]> => {
  const response = await axios.get<Show[]>("https://api.tvmaze.com/shows");
  return response.data;
};
