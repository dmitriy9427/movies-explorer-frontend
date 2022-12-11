import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="notfound">
      <h5 className="notfound__title">404</h5>
      <p className="notfound__text">Страница не найдена</p>
      <Link className="notfound__back" to={-1}>
        Назад
      </Link>
    </div>
  );
}
