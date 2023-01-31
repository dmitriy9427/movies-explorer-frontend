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
      {isErrorDeleteMessage ? (
        <div className="popup__error popup__error_active">
          <span className="popup__error_movies">Не удалось удалить фильм!</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SavedMoviesCardList;
