import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviestBtnStill from "../MoviestBtnStill/MoviestBtnStill";
import "./MoviesCardList.scss";

const MoviesCardList = (props) => {
  return (
    <section className="movies__card_list">
      <div className="movies__card_list-container">
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
      </div>
      {props.movies.length === 0 ? <span>Ничего не найдено</span> : ""}
      {props.movies.length > 0 ? (
        <MoviestBtnStill
          handleShowingMoreMovies={props.handleShowingMoreMovies}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default MoviesCardList;
