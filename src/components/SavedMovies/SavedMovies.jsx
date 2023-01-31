import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.scss";

const SavedMovies = ({
  isLoading,
  setIsLoading,
  savedMovies,
  handleDeleteMovie,
  searchValue,
  isErrorDeleteMessage
}) => {
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const handleSearch = (movieName, isShortFilms) => {
    setIsLoading(true);
    const isSavedMovies = savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(movieName.toLowerCase())
    );

    if (isShortFilms) {
      setFilteredMovies(isSavedMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(isSavedMovies.filter((item) => item.duration > 40));
    }
    setIsLoading(false);
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
    <section className="saved__movies">
      <Header />
      <SearchForm searchValue={searchValue} handleSearch={handleSearch} />
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
