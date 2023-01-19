import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.scss";

function SearchForm(props) {
  
  const [movieName, setMovieName] = React.useState("");
  function handleChangeMovieName(e) {
    setMovieName(e.target.value);
  }
  function handleChangeCheckbox(e) {
    const isShortFilms = e.target.checked;
    setCheckox(isShortFilms);
    props.handleSearch(movieName, isShortFilms);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSearch(movieName, checkox);
  }

  React.useEffect(() => {
    setMovieName(props.defaultValue);
    setCheckox(JSON.parse(localStorage.getItem("shortFilms")) || false);
  }, []);

  return (
    <div className="form">
      <form name="search-form" className="search__form" onSubmit={handleSubmit}>
        <button className="search__form_image"></button>
        <input
          type="text"
          className="search__form_input"
          placeholder="Фильм"
          id="movie"
          value={movieName}
          onChange={handleChangeMovieName}
          required
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="search__form_btn"
        >
          Найти
        </button>
      </form>
      <span className="search__form_input-error"></span>
      <FilterCheckbox checked={checkox} onChange={handleChangeCheckbox} />
    </div>
  );
}

export default SearchForm;
