function MovieCard({ movie, isFavourite, onToggleFavourite }) {
  return (
    <article className="movie-card">
      <img src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="meta">
          {movie.year} • {movie.genre.join(", ")}
        </p>
        <p className="rating">Rating: {movie.rating}</p>
        <button
          type="button"
          className={`fav-btn ${isFavourite ? "active" : ""}`}
          onClick={() => onToggleFavourite(movie)}
        >
          {isFavourite ? "Remove Favourite" : "Add to Favourites"}
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
