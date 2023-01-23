import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.scss";

const SearchForm = (props) => {
  const [movieName, setMovieName] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const handleChangeMovieName = (e) => {
    setMovieName(e.target.value);
  }
  const handleChangeCheckbox = (e) => {
    const isShortFilms = e.target.checked;
    setChecked(isShortFilms);
    props.handleSearch(movieName, isShortFilms);
    props.handleResize();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(movieName, checked);
    props.handleResize();
  }

  React.useEffect(() => {
    setMovieName(props.keyWord);
    setChecked(JSON.parse(localStorage.getItem("shortFilms")) || false);
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
      <FilterCheckbox checked={checked} onChange={handleChangeCheckbox} />
    </div>
  );
}

export default SearchForm;
