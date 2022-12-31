import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="not-found">
      <h5 className="not-found__title">404</h5>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="not-found__back" to={-1}>
        Назад
      </Link>
    </div>
  );
}
