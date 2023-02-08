import React from "react";
import "./FilterCheckbox.scss";

const FilterCheckbox = ({ checked, handleChangeCheckbox }) => {
  return (
    <div className="checkbox">
      <p className="checkbox__title">Короткометражки</p>
      <input
        type="checkbox"
        className="checkbox__button"
        id="custom-checkbox"
        name="custom-checkbox"
        checked={checked}
        onChange={handleChangeCheckbox}
      />
      <label className="checkbox__btn" htmlFor="custom-checkbox"></label>
    </div>
  );
};

export default FilterCheckbox;
