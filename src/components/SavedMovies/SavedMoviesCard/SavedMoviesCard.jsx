import React from "react";
import "./SavedMoviesCard.scss";

const SavedMoviesCard = ({
  savedMovie,
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
    handleDeleteMovie(savedMovie);
  };

  return (
    <div className="movies__card-save">
      <div className="movies__card_info-save">
        <h3 className="movies__card_title-save">{nameRU}</h3>
        <p className="movies__card_duration-save">{durationSavedMovie()}</p>
        <button
          onClick={handleMovieDelete}
          type="button"
          className="button movies__card_delete-save"
        />
      </div>
      <a
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies__card_image-save"
      >
        <img className="movies__card_img-save" src={thumbnail} alt={nameRU} />
      </a>
    </div>
  );
};

export default SavedMoviesCard;
