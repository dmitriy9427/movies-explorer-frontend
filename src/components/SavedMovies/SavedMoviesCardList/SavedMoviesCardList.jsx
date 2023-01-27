import React from "react";
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";
import "./SavedMoviesCardList.scss";

const SavedMoviesCardList = ({ savedMovies, handleDeleteMovie }) => {
  return (
    <section className="saved__movies_card-list">
      {savedMovies.map((movie) => {
        return (
          <SavedMoviesCard
            {...movie}
            movie={movie}
            key={movie.id}
            handleDeleteMovie={handleDeleteMovie}
          />
        );
      })}

      {/* {savedMovies.length === 0 ? (
        <span className="saved__movies_card-list-error">
          Вы не добавили фильмы!
        </span>
      ) : (
        ""
      )} */}
    </section>
  );
};

export default SavedMoviesCardList;
