import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import "./SavedMovies.scss";

function SavedMovies() {
  return (
    <main className="saved__movies">
      <header>
        <Header />
      </header>
      <main>
        <SearchForm />
        <SavedMoviesCardList />
      </main>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default SavedMovies;
