import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.scss";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </section>
  );
}

export default Movies;
