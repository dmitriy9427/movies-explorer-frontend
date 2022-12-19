import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.scss";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  movies,
  isNotFound,
  isFailed,
  savedMovies,
  onSave,
  onDelete,
  checked,
  checkedSaveMovies,
  allSavedMovies,
}) {
  const [moviesToLoad, setMoviesToLoad] = React.useState(0);
  const [displayedMovies, setDisplayedMovies] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const location = useLocation();

  const handleShowMoreMovies = () => {
    setDisplayedMovies((movies) => movies + moviesToLoad);
  };

  const searchShortMovies = (movies) => {
    const searchShortMoviesArr = movies.slice(0);
    return searchShortMoviesArr.filter((item) => item.duration <= 40);
  };

  let saveMoviesFilterArr = !checkedSaveMovies
    ? searchShortMovies(savedMovies)
    : savedMovies;

  let moviesFilterArr = !checked ? searchShortMovies(movies) : movies;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (location.pathname === "/movies") {
      if (windowWidth <= 480) {
        setDisplayedMovies(5);
        setMoviesToLoad(2);
      } else if (windowWidth <= 990 && windowWidth > 480) {
        setDisplayedMovies(8);
        setMoviesToLoad(2);
      } else if (windowWidth <= 1280 && windowWidth > 990) {
        setDisplayedMovies(12);
        setMoviesToLoad(3);
      } else if (windowWidth > 1280) {
        setDisplayedMovies(16);
        setMoviesToLoad(4);
      }
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth, location]);

  let classTextError =
    isFailed && !isNotFound
      ? "movies-list__error_visible"
      : "movies-list__error";

  let buttonStatus =
    !(movies.length > 7) ||
    displayedMovies >= movies.length ||
    displayedMovies >= moviesFilterArr.length
      ? "movies__card__list-button-hidden"
      : "button movies__card__list-button";

  let classTextNotFound =
    isNotFound && moviesFilterArr.length === 0
      ? "movies-list__not-found_visible"
      : "movies-list__not-found";

  let moviesBlock = location.pathname === "/movies";

  return (
    <section className="movies__card_list">
      {moviesBlock ? (
        <>
          <ul className="movies-list__container">
            {moviesFilterArr.slice(0, displayedMovies).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  name={movie.nameRU}
                  duration={movie.duration}
                  trailerLink={movie.trailerLink}
                  thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
                  savedMovies={savedMovies}
                  onSave={onSave}
                  onDelete={onDelete}
                  movie={movie}
                  allSavedMovies={allSavedMovies}
                />
              );
            })}
            <h2 className={classTextNotFound}>
              {moviesFilterArr.length === 0 ? "Ничего не найдено" : ""}
            </h2>
            <h2 className={classTextError}>
              {moviesFilterArr.length === 0
                ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
                : ""}
            </h2>
          </ul>
          <button
            type="button"
            className={buttonStatus}
            onClick={handleShowMoreMovies}
          >
            Еще
          </button>
        </>
      ) : (
        <ul className="movies-list__container">
          {saveMoviesFilterArr.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                name={movie.nameRU}
                duration={movie.duration}
                trailerLink={movie.trailerLink}
                thumbnail={movie.thumbnail}
                savedMovies={savedMovies}
                onSave={onSave}
                onDelete={onDelete}
                movie={movie}
                allSavedMovies={allSavedMovies}
              />
            );
          })}
          <h2 className={classTextNotFound}>
            {savedMovies.length === 0 ? "Ничего не найдено" : ""}
          </h2>
          <h2 className={classTextError}>
            {savedMovies.length === 0
              ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
              : ""}
          </h2>
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;
