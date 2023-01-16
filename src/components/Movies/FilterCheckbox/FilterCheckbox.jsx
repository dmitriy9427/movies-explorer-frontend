import React from "react";
import "./FilterCheckbox.scss";

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <p className="checkbox__title">Короткометражки</p>
      <input
        type="checkbox"
        className="checkbox__button"
        id="custom-checkbox"
        name="custom-checkbox"
      />
      <label className="checkbox__btn" htmlFor="custom-checkbox"></label>
    </div>
  );
}

export default FilterCheckbox;
