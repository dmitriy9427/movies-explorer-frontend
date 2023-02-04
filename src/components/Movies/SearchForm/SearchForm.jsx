import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.scss";

const SearchForm = ({
  handleSearch,
  searchKey,
  errorMessage,
  setErrorMessage,
}) => {
  const [movieName, setMovieName] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChangeMovieName = (e) => {
    setMovieName(e.target.value);
    setIsFormValid(e.target.closest("form").checkValidity());
  };
  const handleChangeCheckbox = (e) => {
    const isShortFilms = e.target.checked;
    setChecked(isShortFilms);
    console.log(isShortFilms);
    handleSearch(movieName, isShortFilms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormValid(e.target.closest("form").checkValidity());
    if (!isFormValid) {
      return setErrorMessage("Нужно ввести ключевое слово.");
    }
    handleSearch("");
  };
  console.log(searchKey);
  React.useEffect(() => {
    setMovieName(searchKey);

    setChecked(localStorage.getItem("isShortFilms"));
  }, [searchKey]);

  return (
    <div className="form">
      <form
        name="search-form"
        className="search-form"
        onSubmit={handleSubmit}
        noValidate
      >
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
        {!isFormValid && (
          <span className="search-form__error">{errorMessage}</span>
        )}
        <FilterCheckbox
          checked={checked}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      </form>
    </div>
  );
};

export default SearchForm;
