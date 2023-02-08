import React from "react";
import "./SavedMoviesCard.scss";

const SavedMoviesCard = ({
  movie,
  handleDeleteMovie,
  duration,
  thumbnail,
  trailerLink,
  nameRU,
}) => {
  const durationSavedMovie = () => {
    if (duration > 60) {
      return ((duration / 60) | 0) + "ч " + (duration % 60) + "м";
    }
    if (duration === 60) {
      return duration / 60 + "ч";
    } else {
      return duration + "м";
    }
  };

  const handleMovieDelete = () => {
    handleDeleteMovie(movie);
  };

  return (
    <div className="saved-movies__card">
      <div className="saved-movies__card-info">
        <h3 className="saved-movies__card-title">{nameRU}</h3>
        <p className="saved-movies__card-duration">{durationSavedMovie()}</p>
        <button
          onClick={handleMovieDelete}
          type="button"
          className="button saved-movies__card-delete"
        />
      </div>
      <a
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
        className="saved-movies__card-image"
      >
        <img className="saved-movies__card-img" src={thumbnail} alt={nameRU} />
      </a>
    </div>
  );
};

export default SavedMoviesCard;
