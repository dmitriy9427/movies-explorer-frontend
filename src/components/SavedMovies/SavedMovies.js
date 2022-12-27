import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import "./SavedMovies.css";

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
    <>
      <Header />
      <main className="save-movies">
        <SearchForm
          onSubmit={onSubmit}
          searchKeyword={searchKeyword}
          onCheckbox={onCheckbox}
          checked={checked}
          checkedSaveMovies={checkedSaveMovies}
        ></SearchForm>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}
            movies={movies}
            isNotFound={isNotFound}
            isFailed={isFailed}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            allSavedMovies={allSavedMovies}
          ></MoviesCardList>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default SavedMovies;
