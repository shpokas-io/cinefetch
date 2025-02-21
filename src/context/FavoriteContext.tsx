import { createContext } from "react";

export type FavoritesContextValue = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export const FavoritesContext = createContext<FavoritesContextValue>({
  favorites: [],
  toggleFavorite: () => {},
});
