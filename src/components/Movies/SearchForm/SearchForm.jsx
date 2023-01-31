import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.scss";

const SearchForm = ({ searchValue, handleSearch }) => {
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
    setMovieName(searchValue);
    setChecked(JSON.parse(localStorage.getItem("isShortFilms")));
  }, []);

  return (
    <div className="form">
      <form name="search-form" className="search-form" onSubmit={handleSubmit}>
        <fieldset className="search-form__fieldset">
          <button className="search-form__image"></button>
          <input
            type="text"
            className="search-form__input"
            placeholder="Фильм"
            id="movie"
            value={movieName || ""}
            onChange={handleChangeMovieName}
            required
          />
          <button type="submit" className="search-form__btn">
            Найти
          </button>
        </fieldset>
        <FilterCheckbox
          checked={checked}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      </form>
    </div>
  );
};

export default SearchForm;
