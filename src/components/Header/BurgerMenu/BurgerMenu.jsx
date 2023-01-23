import React from "react";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";
import account from "../../../images/iconAccount.svg";

const BurgerMenu = ({ openModal, closePopup }) => {
  return (
    <div className="burger">
      <div className={`modal ${openModal ? "open" : "close"}`} />
      <div className={`burger-menu  ${openModal ? "open" : "close"}`}>
        <div className="burger-menu__container">
          <button
            className="button burger-menu__close-icon"
            onClick={closePopup}
            type="button"
          />
          <nav className="burger-menu__link-wrapper">
            <ul className="burger-menu__links">
              <li className="burger-menu__link-li">
                <Link to="/" className="button burger-menu__link">
                  Главная
                </Link>
              </li>
              <li className="burger-menu__link-li">
                <Link to="/movies" className="button burger-menu__link">
                  Фильмы
                </Link>
              </li>
              <li className="burger-menu__link-li">
                <Link to="/saved-movies" className="button burger-menu__link">
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
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
};

export default BurgerMenu;
