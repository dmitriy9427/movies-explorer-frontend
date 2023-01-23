import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.svg";
import "./NavHeader.scss";

const NavHeader = () => {
  return (
    <header className="header__nav-in">
      <Link to="/" className="button">
        <img className="header__logo-nav" src={logo} alt="Логотип страницы" />
      </Link>
      <nav className="header__regin_nav">
        <ul className="header__regin_ul">
          <li>
            <Link to="/signup" className="header__reg_btn">
              <button className="reg__btn">Регистрация</button>
            </Link>
          </li>
          <li>
            <Link to="/signin" className="header__login_btn">
              <button className="log_btn">Войти</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
