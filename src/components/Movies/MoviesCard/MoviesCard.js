import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({
  name,
  duration,
  thumbnail,
  trailerLink,
  savedMovies,
  onSave,
  onDelete,
  movie,
  allSavedMovies,
}) {
  const location = useLocation();
  let hours = Math.floor(duration / 60);
  let minutes = Math.floor(duration - hours * 60);
  const isSaved = savedMovies.some((m) => m.movieId === movie.id);
  const isAllSaved = allSavedMovies.some((m) => m.movieId === movie.id);

  let buttonClassName =
    isSaved || isAllSaved
      ? "button movies-card__button movies-card__button_save"
      : "button movies-card__button";

  const handleSaveClick = () => {
    if (isSaved) {
      onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onSave(movie);
    }
  };

  const handleDeleteMovie = () => onDelete(movie);

  return (
    <li className="movie-card__item">
      <div className="movie-card__block">
        <div className="movie-card__description">
          <h3 className="movie-card__title">{name}</h3>
          <div className="movie-card__time">
            {hours} ч {minutes} м
          </div>

          {location.pathname === "/movies" && (
            <button
              className={buttonClassName}
              type="button"
              onClick={handleSaveClick}
            ></button>
          )}
          {location.pathname === "/saved-movies" && (
            <button
              className="button movies-card__button_delete"
              type="button"
              onClick={handleDeleteMovie}
            ></button>
          )}
        </div>
      </div>
      <a
        href={trailerLink}
        className="movie-card__trailer-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={thumbnail} alt={name} className="movie-card__image" />
      </a>
    </li>
  );
}

export default MoviesCard;
