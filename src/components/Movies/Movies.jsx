import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.scss";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <body className="movies">
      <header>
        <Header />
      </header>
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default Movies;
