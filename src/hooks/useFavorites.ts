import { useContext } from "react";
import { FavoritesContext } from "../context/FavoriteContext";

export const useFavorites = () => useContext(FavoritesContext);
