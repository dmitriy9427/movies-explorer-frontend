import React from "react";
import "./MoviesCard.scss";

const MoviesCard = (props) => {
  const thumbnail = `https://api.nomoreparties.co/${props.image.formats.thumbnail.url}`;
  const duration = () => {
    if (props.duration > 60) {
      return ((props.duration / 60) | 0) + "ч " + (props.duration % 60) + "м";
    }
    if (props.duration === 60) {
      return props.duration / 60 + "ч";
    } else {
      return props.duration + "м";
    }
  };

  const isSaved = (movie) => {
    return props.savedMovies.some((item) => item.movieId === movie.id);
  };

  const handleMovieSave = () => {
    props.handleSaveMovie(props.movie);
  };

  const handleDeleteMovie = () => {
    props.handleDeleteMovie(props.movie);
  };

  return (
    <div className="movies__card">
      <div className="movies__card_info">
        <h3 className="movies__card_title">{props.nameRU}</h3>
        <p className="movies__card_duration">{duration()}</p>
        {isSaved(props.movie) ? (
          <button
            type="button"
            onClick={handleDeleteMovie}
            className="button movies__card_like movies__card_like-active"
          />
        ) : (
          <button
            type="button"
            onClick={handleMovieSave}
            className="button movies__card_like"
          />
        )}
      </div>
      <a className="movies__card_image" href={props.trailerLink}>
        <img className="movies__card_img" src={thumbnail} alt={props.nameRU} />
      </a>
    </div>
  );
};

export default MoviesCard;
