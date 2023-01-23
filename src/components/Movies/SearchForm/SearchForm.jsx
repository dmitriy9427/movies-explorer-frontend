import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.scss";

const SearchForm = ({ handleResize, handleSearch }) => {
  const [movieName, setMovieName] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const handleChangeMovieName = (e) => {
    setMovieName(e.target.value);
  };
  const handleChangeCheckbox = (e) => {
    const isShortFilms = e.target.checked;
    setChecked(isShortFilms);
    handleSearch(movieName, isShortFilms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(movieName, checked);
  };

  React.useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem("isShortFilms")) || false);
    setMovieName("");
  }, []);

  return (
    <div className="form">
      <form name="search-form" className="search__form" onSubmit={handleSubmit}>
        <fieldset className="search-form-fieldset">
          <button className="search__form_image"></button>
          <input
            type="text"
            className="search__form_input"
            placeholder="Фильм"
            id="movie"
            value={movieName || ""}
            onChange={handleChangeMovieName}
            required
          />
          <button type="submit" className="search__form_btn">
            Найти
          </button>
        </fieldset>
        <FilterCheckbox
          checked={checked}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      </form>
      <span className="search__form_input-error"></span>
    </div>
  );
};

export default SearchForm;
