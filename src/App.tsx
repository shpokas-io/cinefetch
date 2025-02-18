import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const App: React.FC = () => (
  <div className="theme-transition bg-[var(--bg-color)] text-[var(--text-color)] min-h-screen flex flex-col">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </div>
);

export default App;
