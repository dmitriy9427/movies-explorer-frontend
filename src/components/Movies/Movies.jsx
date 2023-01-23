import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import "./Movies.scss";

const Movies = (props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleCheckWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleResize = () => {
    const receivedFilms = JSON.parse(localStorage.getItem("foundMovies"));
    if (receivedFilms === null) {
      return;
    }
    if (windowWidth >= 1280) {
      props.setMovies(receivedFilms.slice(0, 12));
      props.setMoreMovies(3);
    } else if (windowWidth > 480 && windowWidth < 1280) {
      props.setMovies(receivedFilms.slice(0, 8));
      props.setMoreMovies(2);
    } else if (windowWidth <= 480) {
      props.setMovies(receivedFilms.slice(0, 5));
      props.setMoreMovies(2);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleCheckWindowWidth);
  }, [windowWidth]);

  return (
    <div className="movies">
      <Header />
      <SearchForm
        handleResize={handleResize}
        handleSearch={props.handleSearch}
        keyWord={props.keyWord}
      />
      {props.isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={props.movies}
          savedMovies={props.savedMovies}
          handleSaveMovie={props.handleSaveMovie}
          handleShowingMoreMovies={props.handleShowingMoreMovies}
          handleDeleteMovie={props.handleDeleteMovie}
          errorMessage={props.errorMessage}
        />
      )}
      <Footer />
    </div>
  );
};

export default Movies;
