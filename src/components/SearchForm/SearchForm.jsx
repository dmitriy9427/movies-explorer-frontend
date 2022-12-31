import Checkbox from "../Movies/Checkbox/Checkbox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";

function SearchForm({
  onSubmit,
  searchKeyword,
  onCheckbox,
  checked,
  checkedSaveMovies,
}) {
  const [errorText, setErrorText] = useState("");
  const [key, setKeyword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (searchKeyword && location.pathname === "/movies") {
      setKeyword(searchKeyword);
    }
  }, [searchKeyword, location.pathname]);

  const handleChange = (evt) => {
    evt.preventDefault();
    setKeyword(evt.target.value);
    setIsFormValid(evt.target.closest("form").checkValidity());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsFormValid(evt.target.closest("form").checkValidity());
    if (!isFormValid) {
      return setErrorText("Нужно ввести ключевое слово");
    }
    onSubmit("");
  };

  return (
    <section className="search">
      <div className="search__container">
        <form
          action="#"
          noValidate
          className="search__form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            required
            onChange={handleChange || ""}
            value={key}
          />
          <button className="buttons"></button>
          <button type="submit" className="search__button">
            Найти
          </button>
          <span className="search__error">{!isFormValid && errorText}</span>
        </form>

        <Checkbox
          onCheckbox={onCheckbox}
          checked={checked}
          checkedSaveMovies={checkedSaveMovies}
        ></Checkbox>
      </div>
    </section>
  );
}

export default SearchForm;
