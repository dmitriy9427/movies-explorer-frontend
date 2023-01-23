import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.scss";

const Movies = ({
  isLoading,
  movies,
  savedMovies,
  handleSearch,
  handleShowingMoreMovies,
  handleDeleteMovie,
  handleSaveMovie,
  errorMessage,
}) => {
  return (
    <div className="movies">
      <Header />
      <SearchForm handleSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          handleSaveMovie={handleSaveMovie}
          handleShowingMoreMovies={handleShowingMoreMovies}
          handleDeleteMovie={handleDeleteMovie}
          errorMessage={errorMessage}
        />
      )}
      <Footer />
    </div>
  );
};

export default Movies;
