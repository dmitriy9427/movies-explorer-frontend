import React from "react";
import "./BurgerMenu.scss";
import { Link, NavLink } from "react-router-dom";
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "button burger-menu__link burger-menu__link-active"
                      : "button burger-menu__link"
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li className="burger-menu__link-li">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive
                      ? "button burger-menu__link burger-menu__link-active"
                      : "button burger-menu__link"
                  }
                >
                  Фильмы
                </NavLink>
              </li>
              <li className="burger-menu__link-li">
                <NavLink
                  to="/saved-movies"
                  className={({ isActive }) =>
                    isActive
                      ? "button burger-menu__link burger-menu__link-active"
                      : "button burger-menu__link"
                  }
                >
                  Сохраненные фильмы
                </NavLink>
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
