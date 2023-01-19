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
              movie={movie}
              savedMovies={props.savedMovies}
              handleDeleteMovie={props.handleDeleteMovie}
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              trailerLink={movie.trailerLink}
              thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
            />
          );
        })}
        <MoviestBtnStill />
      </div>
    </section>
  );
};

export default MoviesCardList;
