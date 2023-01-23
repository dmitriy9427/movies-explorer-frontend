import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import {
  MAX_SCREEN_RESOLUTION_1280,
  MAX_SCREEN_RESOLUTION_519,
  SHOW_MOWIES_ON_THE_PAGE_8,
  SHOW_MOWIES_ON_THE_PAGE_5,
  SHOW_MOWIES_ON_THE_PAGE_3,
  ADD_MOVIES_3,
  ADD_MOVIES_2,
  ADD_MOVIES_1,
} from "../../utils/constants";
import "./Movies.scss";

const Movies = (props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleCheckWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleResize = () => {
    const receivedFilms = JSON.parse(localStorage.getItem("receivedFilms"));
    if (receivedFilms === null) {
      return;
    }
    if (windowWidth >= MAX_SCREEN_RESOLUTION_1280) {
      props.setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_8));
      props.setMoreMovies(ADD_MOVIES_3);
    } else if (
      windowWidth > MAX_SCREEN_RESOLUTION_519 &&
      windowWidth < MAX_SCREEN_RESOLUTION_1280
    ) {
      props.setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_5));
      props.setMoreMovies(ADD_MOVIES_2);
    } else if (windowWidth <= MAX_SCREEN_RESOLUTION_519) {
      props.setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_3));
      props.setMoreMovies(ADD_MOVIES_1);
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
            moreMovies={props.moreMovies}
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
