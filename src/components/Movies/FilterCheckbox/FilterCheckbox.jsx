import React from "react";
import { useLocation } from "react-router-dom";
import "./FilterCheckbox.scss";

function FilterCheckbox({ onCheckbox, checked, checkedSaveMovies }) {
  const location = useLocation();
  const handleCheckbox = (evt) => {
    onCheckbox(evt.target.checked);
  };

  return (
    <div className="checkbox">
      {location.pathname === "/movies" ? (
        <input
          type="checkbox"
          className="checkbox__button"
          id="checkbox"
          name="custom-checkbox"
          defaultValue="yes"
          checked={checked}
          onChange={handleCheckbox}
        />
      ) : (
        <input
          type="checkbox"
          className="checkbox__button"
          id="checkbox"
          name="custom-checkbox"
          checked={checkedSaveMovies}
          onChange={handleCheckbox}
        />
      )}
      <label className="checkbox__btn" htmlFor="checkbox"></label>
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
