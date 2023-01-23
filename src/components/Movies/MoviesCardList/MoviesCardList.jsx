import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviestBtnStill from "../MoviestBtnStill/MoviestBtnStill";
import "./MoviesCardList.scss";

const MoviesCardList = (props) => {
  return (
    <section className="movies__card_list">
      {props.movies.map((movie) => {
        return (
          <MoviesCard
            {...movie}
            key={movie.id}
            savedMovies={props.savedMovies}
            handleDeleteMovie={props.handleDeleteMovie}
            handleSaveMovie={props.handleSaveMovie}
          />
        );
      })}

      {props.movies.length === 0 ? (
        <span className="movies__card_list-error">Ничего не найдено</span>
      ) : (
        ""
      )}

      <MoviestBtnStill
        movies={props.movies}
        handleShowingMoreMovies={props.handleShowingMoreMovies}
      />
    </section>
  );
};

export default MoviesCardList;
