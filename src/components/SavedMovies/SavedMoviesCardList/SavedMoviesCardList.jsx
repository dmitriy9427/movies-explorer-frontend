import React from "react";
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";
import "./SavedMoviesCardList.scss";

const SavedMoviesCardList = ({ filteredMovies, handleDeleteMovie }) => {
  return (
    <section className="saved__movies_card-list">
      {filteredMovies.map((movie) => {
        return (
          <SavedMoviesCard
            {...movie}
            key={movie._id}
            movie={movie}
            handleDeleteMovie={handleDeleteMovie}
          />
        );
      })}

      {filteredMovies.length === 0 ? (
        <span className="saved__movies_card-list-error">
          Нет сохраненных фильмов!
        </span>
      ) : (
        ""
      )}
    </section>
  );
};

export default SavedMoviesCardList;
