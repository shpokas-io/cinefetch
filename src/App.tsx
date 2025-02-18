import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Favorites from "./pages/FavoritesPage";
import ShowDetails from "./pages/DetailsPage";

const App: React.FC = () => (
  <div className="theme-transition bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen flex flex-col">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/shows/:id" element={<ShowDetails />} />
    </Routes>
  </div>
);

export default App;
