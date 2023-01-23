import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.scss";

const SavedMovies = ({ isLoading, savedMovies, handleDeleteMovie }) => {
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const handleSearch = (movieName, isShortFilms) => {
    const filteredMovies = savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(movieName.toLowerCase())
    );

    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40));
    } else {
      setFilteredMovies(filteredMovies);
    }
  };

  const initialFilteredMovies = () => {
    setFilteredMovies(savedMovies);
  };

  React.useEffect(() => {
    setFilteredMovies(
      filteredMovies.fill((item) =>
        savedMovies.some((m) => item.movieId === m.movieId)
      )
    );
  }, [savedMovies]);

  React.useEffect(() => {
    initialFilteredMovies();
  }, []);

  return (
    <section className="saved__movies">
      <Header />
      <SearchForm handleSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <SavedMoviesCardList
          savedMovies={savedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      )}
      <Footer />
    </section>
  );
};

export default SavedMovies;
