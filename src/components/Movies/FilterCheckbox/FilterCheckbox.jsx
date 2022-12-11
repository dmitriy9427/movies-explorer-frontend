import React from "react";
import "./FilterCheckbox.scss";

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <button className="checkbox__button checkbox__button_active" />
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
