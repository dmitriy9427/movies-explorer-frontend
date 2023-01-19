import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.scss";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const [checked, setChecked] = useState(true);
  const [showMovies, setShowMovies] = React.useState([]);

  function handleSearchMovies(text) {
    if (props.movies.length < 1) {
      props.getMovies();
    }
  }

  // обработчик для чекбокса
  const handleChangeCheckbox = () => {
    setChecked(!checked);
    localStorage.setItem("checkbox", !checked);
  };
  return (
    <div className="movies">
      <Header />
      <SearchForm
        handleSearch={props.getMovies}
        checked={checked}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      \
      {props.isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={props.movies}
          savedMovies={props.savedMovies}
          handleAddSaveMovies={props.handleAddSaveMovies}
          handleDeleteMovie={props.handleDeleteMovie}
        />
      )}
      <Footer />
    </div>
  );
}

export default Movies;
