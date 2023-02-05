import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.scss";

const SavedMovies = ({
  isLoading,
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

    console.log(isSavedMovies);

    if (isShortFilms) {
      setFilteredMovies(isSavedMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(isSavedMovies);
    }
    localStorage.setItem("isSavedMovies", JSON.stringify(isSavedMovies));
  };

  const initialFilteredMovies = () => {
    setFilteredMovies(savedMovies);
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
        searchKey=""
        handleSearch={handleSearch}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <SavedMoviesCardList
          filteredMovies={filteredMovies}
          handleDeleteMovie={handleDeleteMovie}
          isErrorDeleteMessage={isErrorDeleteMessage}
        />
      )}
      <Footer />
    </section>
  );
};

export default SavedMovies;
