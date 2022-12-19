import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.scss";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

function Movies({
  onSubmit,
  movies,
  isLoading,
  isFailed,
  isNotFound,
  searchKeyword,
  savedMovies,
  onSave,
  onDelete,
  onCheckbox,
  checked,
  checkedSaveMovies,
  allSavedMovies,
}) {
  return (
    <section className="movies">
      <header>
        <Header />
      </header>
      <main>
        <SearchForm
          onSubmit={onSubmit}
          searchKeyword={searchKeyword}
          onCheckbox={onCheckbox}
          checked={checked}
          checkedSaveMovies={checkedSaveMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            isNotFound={isNotFound}
            isFailed={isFailed}
            searchKeyword={searchKeyword}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            onCheckbox={onCheckbox}
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}
            allSavedMovies={allSavedMovies}
          />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}

export default Movies;
