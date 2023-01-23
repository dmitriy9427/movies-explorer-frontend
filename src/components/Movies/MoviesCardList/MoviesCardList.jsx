import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviestBtnStill from "../MoviestBtnStill/MoviestBtnStill";
import "./MoviesCardList.scss";

const MoviesCardList = ({
  movies,
  savedMovies,
  handleSaveMovie,
  handleShowingMoreMovies,
  handleDeleteMovie,
  errorMessage,
}) => {
  const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

  return (
    <section className="movies__card_list">
      {movies.map((movie) => {
        return (
          <MoviesCard
            {...movie}
            key={movie.id}
            savedMovies={savedMovies}
            handleDeleteMovie={handleDeleteMovie}
            handleSaveMovie={handleSaveMovie}
            isOnlySaved={false}
          />
        );
      })}

      {movies.length === 0 ? (
        <span className="movies__card_list-error">Ничего не найдено!</span>
      ) : (
        ""
      )}

      {errorMessage ? (
        <span className="movies__card_list-error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </span>
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
  );
};

export default MoviesCardList;
