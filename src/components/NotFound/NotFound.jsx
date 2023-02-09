import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h5 className="not-found__title">404</h5>
      <p className="not-found__text">Страница не найдена</p>
      <button
        type="button"
        className="not-found__back"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  );
};

export default NotFound;
