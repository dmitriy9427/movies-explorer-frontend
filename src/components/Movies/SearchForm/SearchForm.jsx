import React from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.scss";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSubmit,
  searchKeyword,
  onCheckbox,
  checked,
  checkedSaveMovies,
}) {
  const [errorText, setErrorText] = React.useState("");
  const [keyword, setKeyword] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (searchKeyword && location.pathname === "/movies") {
      setKeyword(searchKeyword);
    }
  }, []);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
    setIsFormValid(evt.target.closest("form").checkValidity());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsFormValid(evt.target.closest("form").checkValidity());
    if (!isFormValid) {
      return setErrorText("Нужно ввести ключевое слово");
    }
    onSubmit(keyword);
  };

  return (
    <div className="search">
      <form
        name="search-form"
        onSubmit={handleSubmit}
        className="search__form"
        noValidate
      >
        <button className="search__form_image"></button>
        <input
          type="text"
          className="search__form_input"
          placeholder="Фильм"
          id="movie"
          onChange={handleChange}
          value={keyword}
          required
        />
        <button type="submit" className="search__form_btn">
          Найти
        </button>
      </form>
      <span className="search__form_input-error">
        {!isFormValid && errorText}
      </span>
      <FilterCheckbox
        onCheckbox={onCheckbox}
        checked={checked}
        checkedSaveMovies={checkedSaveMovies}
      />
    </div>
  );
}

export default SearchForm;
