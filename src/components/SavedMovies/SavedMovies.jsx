import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.scss";

const SavedMovies = ({
  savedMovies,
  handleDeleteMovie,
  isErrorDeleteMessage,
  errorMessage,
  setErrorMessage,
}) => {
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const handleSearch = (movieName, isShortFilms) => {
    const isSavedMovies = savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(movieName.toLowerCase())
    );

    if (isShortFilms) {
      setFilteredMovies(isSavedMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(isSavedMovies.filter((item) => item.duration > 40));
    }
  };

  const initialFilteredMovies = () => {
    setFilteredMovies(filteredMovies);
  };

  React.useEffect(() => {
    setFilteredMovies(
      filteredMovies.filter((movie) =>
        savedMovies.some((m) => movie.movieId === m.movieId)
      )
    );
    initialFilteredMovies();
  }, [savedMovies]);

  return (
    <section className="saved-movies">
      <Header />
      <SearchForm
        searchValue=""
        handleSearch={handleSearch}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <SavedMoviesCardList
        filteredMovies={filteredMovies}
        handleDeleteMovie={handleDeleteMovie}
        isErrorDeleteMessage={isErrorDeleteMessage}
      />
      <Footer />
    </section>
  );
};

export default SavedMovies;
