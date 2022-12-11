import React from "react";
import "./SearchForm.scss";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="form">
      <form noValidate name="search-form" className="search__form">
        <button className="search__form_image"></button>
        <input
          type="text"
          className="search__form_input"
          placeholder="Фильм"
          id="movie"
          required
        />
        <button type="submit" className="search__form_btn">
          Найти
        </button>
      </form>
      <span className="search__form_input-error"></span>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
