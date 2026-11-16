import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Favourites from "./pages/Favourites";
import { getFavourites, saveFavourites } from "./utils/storage";
import "./App.css";

function App() {
  const [favourites, setFavourites] = useState(() => getFavourites());

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  const toggleFavourite = (movie) => {
    setFavourites((prev) =>
      prev.some((m) => m.id === movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie]
    );
  };

  const isFavourite = (id) => favourites.some((m) => m.id === id);

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Home isFavourite={isFavourite} onToggleFavourite={toggleFavourite} />}
          />
          <Route
            path="/explore"
            element={<Explore isFavourite={isFavourite} onToggleFavourite={toggleFavourite} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                isFavourite={isFavourite}
                onToggleFavourite={toggleFavourite}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
