import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import icon from "../../images/iconAccount.svg";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import "./Header.scss";

const Header = () => {
  const [openModal, setOpenModal] = React.useState(false);

  const openPopup = () => {
    setOpenModal(true);
  };

  const closePopup = () => {
    setOpenModal(false);
  };

  return (
    <header className="header">
      <Link to="/" className="button">
        <img className="header__logo" src={logo} alt="логотип" />
      </Link>
      <nav className="header__nav">
        <ul className="header__links">
          <li>
            <NavLink className="button header__link" to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink className="button header__link link" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </li>

          <NavLink to="/profile" className="button header__account">
            <p className="header__account-text">Аккаунт</p>
            <img className="header__account-icon" src={icon} alt="Иконка" />
          </NavLink>
        </ul>
      </nav>
      <button onClick={openPopup} className="header__button_burger-menu" />
      <BurgerMenu openModal={openModal} closePopup={closePopup} />
    </header>
  );
};

export default Header;
