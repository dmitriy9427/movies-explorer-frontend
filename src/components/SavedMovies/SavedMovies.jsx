import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList/SavedMoviesCardList";
import "./SavedMovies.scss";

function SavedMovies() {
  return (
    <section className="saved__movies">
      <Header />
      <SearchForm />
      <SavedMoviesCardList />
      <Footer />
    </section>
  );
}

export default SavedMovies;
