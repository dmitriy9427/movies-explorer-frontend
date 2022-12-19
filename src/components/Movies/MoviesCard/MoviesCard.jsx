import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.scss";

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
      ? "button movies__card_like movies__card_like-active"
      : "button movies__card_like";

  const handleSaveClick = () => {
    if (isSaved) {
      onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onSave(movie);
    }
  };

  return (
    <div className="movies__card">
      <div className="movies__card_info">
        <h3 className="movies__card_title">{name}</h3>
        <p className="movies__card_duration">
          {hours}ч{minutes}м
        </p>
        {location.pathname === "/movies" && (
          <button
            type="button"
            onClick={handleSaveClick}
            className={buttonClassName}
          />
        )}
      </div>
      <a
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies__card_image"
      >
        <img className="movies__card_img" src={thumbnail} alt={name} />
      </a>
    </div>
  );
}

export default MoviesCard;
