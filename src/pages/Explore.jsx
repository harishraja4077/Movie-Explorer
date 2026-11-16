import { useMemo, useState } from "react";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

function Explore({ isFavourite, onToggleFavourite }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("default");

  const genres = useMemo(
    () => ["All", ...new Set(movies.flatMap((m) => m.genre))],
    []
  );

  const filtered = useMemo(() => {
    let list = movies.filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase().trim())
    );
    if (genre !== "All") {
      list = list.filter((m) => m.genre.includes(genre));
    }
    if (sort === "rating") {
      list = [...list].sort((a, b) => b.rating - a.rating);
    } else if (sort === "newest") {
      list = [...list].sort((a, b) => b.year - a.year);
    }
    return list;
  }, [search, genre, sort]);

  const clearFilters = () => {
    setSearch("");
    setGenre("All");
    setSort("default");
  };

  return (
    <div className="page">
      <div className="section-head">
        <h1>Explore Movies</h1>
        <p>Browse, search, and filter our collection.</p>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search movies by title"
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)} aria-label="Filter by genre">
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort movies">
          <option value="default">Sort: Default</option>
          <option value="rating">Highest Rating</option>
          <option value="newest">Newest Release Year</option>
        </select>
        <button type="button" className="btn secondary" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="empty-state">No movies match your search or filters.</p>
      ) : (
        <div className="movie-grid">
          {filtered.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavourite={isFavourite(movie.id)}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Explore;
