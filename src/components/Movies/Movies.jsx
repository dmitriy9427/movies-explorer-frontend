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
  searchKey,
  handleShowingMoreMovies,
  handleDeleteMovie,
  handleSaveMovie,
  isErrorDeleteMessage,
  errorAddMessage,
  errorServer,
  errorMessage,
  setErrorMessage,
}) => {
  return (
    <div className="movies">
      <Header />
      <SearchForm
        searchKey={searchKey}
        handleSearch={handleSearch}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          handleSaveMovie={handleSaveMovie}
          handleShowingMoreMovies={handleShowingMoreMovies}
          handleDeleteMovie={handleDeleteMovie}
          isErrorDeleteMessage={isErrorDeleteMessage}
          errorAddMessage={errorAddMessage}
          errorServer={errorServer}
        />
      )}
      <Footer />
    </div>
  );
};

export default Movies;
