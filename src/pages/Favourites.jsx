import MovieCard from "../components/MovieCard";

function Favourites({ favourites, isFavourite, onToggleFavourite }) {
  return (
    <div className="page">
      <div className="section-head">
        <h1>Favourites</h1>
        <p>Your saved movies, stored in your browser.</p>
      </div>

      {favourites.length === 0 ? (
        <p className="empty-state">No favourite movies yet. Add some from Home or Explore.</p>
      ) : (
        <div className="movie-grid">
          {favourites.map((movie) => (
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

export default Favourites;
