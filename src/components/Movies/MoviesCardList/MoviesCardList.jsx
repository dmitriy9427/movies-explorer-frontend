import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviestBtnStill from "../MoviestBtnStill/MoviestBtnStill";
import "./MoviesCardList.scss";
import "../../App/PopupError.css";

const MoviesCardList = ({
  movies,
  savedMovies,
  handleSaveMovie,
  handleShowingMoreMovies,
  handleDeleteMovie,
  isErrorDeleteMessage,
  errorAddMessage,
  errorServer,
}) => {
  const receivedFilms = JSON.parse(localStorage.getItem("receivedFilms"));

  return (
    <>
      <section className="movies__card_list">
        {movies.map((movie) => {
          return (
            <MoviesCard
              {...movie}
              movie={movie}
              key={movie.id}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
              handleSaveMovie={handleSaveMovie}
            />
          );
        })}

        {movies.length === 0 ? (
          <span className="movies__card_list-error">Ничего не найдено!</span>
        ) : movies.length < receivedFilms.length ? (
          <MoviestBtnStill
            movies={movies}
            handleShowingMoreMovies={handleShowingMoreMovies}
          />
        ) : (
          ""
        )}
        {errorServer ? (
          <span className="movies__card_list-error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </span>
        ) : (
          ""
        )}
      </section>

      {errorAddMessage ? (
        <div className="popup__error popup__error_active">
          <span className="popup__error_movies">
            Не удалось добавить фильм!
          </span>
        </div>
      ) : (
        ""
      )}
      {isErrorDeleteMessage ? (
        <div className="popup__error popup__error_active">
          <span className="popup__error_movies">
            Не удалось удалить фильм!
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MoviesCardList;
