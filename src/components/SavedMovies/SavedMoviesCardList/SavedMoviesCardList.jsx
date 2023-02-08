import React from "react";
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";
import "./SavedMoviesCardList.scss";

const SavedMoviesCardList = ({
  filteredMovies,
  handleDeleteMovie,
  isErrorDeleteMessage,
}) => {
  return (
    <>
      <section className="saved-movies__card-list">
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
          <span className="saved-movies__card-list-error">
            Нет сохраненных фильмов!
          </span>
        ) : (
          ""
        )}
      </section>
      {isErrorDeleteMessage ? (
        <div className="popup__error">
          <span className="popup__error-movies">Не удалось удалить фильм!</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SavedMoviesCardList;
