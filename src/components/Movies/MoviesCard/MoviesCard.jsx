import React from "react";
import "./MoviesCard.scss";

const MoviesCard = ({
  movie,
  nameRU,
  trailerLink,
  image,
  duration,
  savedMovies,
  handleDeleteMovie,
  handleSaveMovie,
}) => {
  const thumbnailMovie = `https://api.nomoreparties.co/${image.formats.thumbnail.url}`;
  const durationMovie = () => {
    if (duration > 60) {
      return ((duration / 60) | 0) + "ч " + (duration % 60) + "м";
    }
    if (duration === 60) {
      return duration / 60 + "ч";
    } else {
      return duration + "м";
    }
  };

  const isSaved = (movie) => {
    return savedMovies.some((item) => item.movieId === movie.id);
  };

  let buttonClassName = isSaved
    ? "button movies__card_like movies__card_like-active"
    : "button movies__card_like";

  // const handleMovieSave = () => {
  //   handleSaveMovie(movie);
  // };

  // const handleMovieDelete = () => {
  //   handleDeleteMovie(movie);
  // };

  const handleSaveClick = () => {
    if (isSaved) {
      handleDeleteMovie(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      handleSaveMovie(movie);
    }
  };

  return (
    <div className="movies__card">
      <div className="movies__card_info">
        <h3 className="movies__card_title">{nameRU}</h3>
        <p className="movies__card_duration">{durationMovie()}</p>

        <button
          type="button"
          onClick={handleSaveClick}
          className={buttonClassName}
        />
      </div>
      <a className="movies__card_image" href={trailerLink}>
        <img className="movies__card_img" src={thumbnailMovie} alt={nameRU} />
      </a>
    </div>
  );
};

export default MoviesCard;
