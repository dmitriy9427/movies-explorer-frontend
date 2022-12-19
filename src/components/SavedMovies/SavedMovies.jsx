import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import "./SavedMovies.scss";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies({
  movies,
  onSubmit,
  isLoading,
  isFailed,
  isNotFound,
  searchKeyword,
  onCheckbox,
  checked,
  checkedSaveMovies,
  savedMovies,
  onSave,
  onDelete,
  allSavedMovies,
}) {
  return (
    <main className="saved__movies">
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
          <SavedMoviesCardList
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}
            movies={movies}
            isNotFound={isNotFound}
            isFailed={isFailed}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            allSavedMovies={allSavedMovies}
          />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default SavedMovies;
