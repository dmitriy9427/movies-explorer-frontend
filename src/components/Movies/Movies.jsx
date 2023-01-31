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
  searchValue,
  handleShowingMoreMovies,
  handleDeleteMovie,
  handleSaveMovie,
  errorMessage,
  errorAddMessage,
}) => {
  return (
    <div className="movies">
      <Header />
      <SearchForm searchValue={searchValue} handleSearch={handleSearch} />
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
          errorAddMessage={errorAddMessage}
        />
      )}
      <Footer />
    </div>
  );
};

export default Movies;
