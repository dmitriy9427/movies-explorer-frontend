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
  errorMessage,
  errorAddMessage,
}) => {
  const foundMovies = JSON.parse(localStorage.getItem("receivedFilms"));

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
        ) : (
          ""
        )}
        {movies.length === 0 ? (
          ""
        ) : movies.length < foundMovies.length ? (
          <MoviestBtnStill
            movies={movies}
            handleShowingMoreMovies={handleShowingMoreMovies}
          />
        ) : (
          ""
        )}
      </section>

      {errorMessage ? (
        <div className="popup__error">
          <span className="popup__error_movies">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </span>
        </div>
      ) : (
        ""
      )}

      {errorAddMessage ? (
        <div className="popup__error popup__error_active">
          <span className="popup__error_movies">
            Не удалось добавить фильм!
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MoviesCardList;
