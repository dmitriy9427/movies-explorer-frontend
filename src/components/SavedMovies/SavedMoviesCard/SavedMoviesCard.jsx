import React from "react";
import { useLocation } from "react-router-dom";
import "./SavedMoviesCard.scss";

function SavedMoviesCard({
  name,
  movie,
  trailerLink,
  hours,
  minutes,
  onDelete,
  thumbnail,
}) {
  const location = useLocation();
  const handleDeleteMovie = () => onDelete(movie);
  return (
    <div className="movies__card-save">
      <div className="movies__card_info-save">
        <h3 className="movies__card_title-save">{name}</h3>
        <p className="movies__card_duration-save">
          {hours}ч{minutes}м
        </p>
        {location.pathname === "/saved-movies" && (
          <button
            type="button"
            className="button movies__card_delete-save"
            onClick={handleDeleteMovie}
          />
        )}
      </div>
      <a
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies__card_image-save"
      >
        <img className="movies__card_img-save" src={thumbnail} alt={name} />
      </a>
    </div>
  );
}

export default SavedMoviesCard;
