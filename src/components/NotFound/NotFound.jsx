import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h5 className="not-found__title">404</h5>
      <p className="not-found__text">Страница не найдена</p>
      <NavLink type="button" className="not-found__back" to={"/"}>
        Назад
      </NavLink>
    </div>
  );
};

export default NotFound;
