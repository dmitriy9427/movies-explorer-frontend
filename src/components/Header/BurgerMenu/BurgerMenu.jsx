import React from "react";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";
import account from "../../../images/iconAccount.svg";

export default function BurgerMenu() {
  return (
    <div className="burger">
      <div className="modal open close" />
      <div className="burger-menu open close">
        <div className="burger-menu__container">
          <button className="button burger-menu__close-icon" type="button" />
          <nav className="burger-menu__link-wrapper">
            <Link to="/" className="button burger-menu__link">
              Главная
            </Link>
            <Link to="/movies" className="button burger-menu__link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="button burger-menu__link">
              Сохраненные фильмы
            </Link>
          </nav>
          <div className="burger-menu__account">
            <Link to="/profile" className="button burger-menu__btn-profile">
              <p className="burger-menu__link-text">Аккаунт</p>
              <img
                className="burger-menu__account-icon"
                src={account}
                alt="Иконка профиля"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
