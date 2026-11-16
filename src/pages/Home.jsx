import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { movies, featuredMovie } from "../data/movies";

function Home({ isFavourite, onToggleFavourite }) {
  const trending = movies.filter((m) => m.trending).slice(0, 4);
  const popular = movies.filter((m) => m.popular).slice(0, 4);

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Featured Movie</p>
          <h1>{featuredMovie.title}</h1>
          <p className="hero-meta">
            {featuredMovie.year} • {featuredMovie.genre.join(", ")} • Rating {featuredMovie.rating}
          </p>
          <p className="hero-desc">{featuredMovie.description}</p>
          <div className="hero-actions">
            <Link to="/explore" className="btn primary">View All Movies</Link>
            <button
              type="button"
              className="btn"
              onClick={() => onToggleFavourite(featuredMovie)}
            >
              {isFavourite(featuredMovie.id) ? "Remove from Favourites" : "Add to Favourites"}
            </button>
          </div>
        </div>
        <img src={featuredMovie.poster} alt={featuredMovie.title} className="hero-poster" />
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Trending Movies</h2>
        </div>
        <div className="movie-grid">
          {trending.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavourite={isFavourite(movie.id)}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Popular Movies</h2>
        </div>
        <div className="movie-grid">
          {popular.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavourite={isFavourite(movie.id)}
              onToggleFavourite={onToggleFavourite}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
