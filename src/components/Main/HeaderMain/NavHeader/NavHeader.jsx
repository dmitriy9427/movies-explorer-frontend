import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../images/logo.svg";
import "./NavHeader.scss";

function NavHeader() {
  return (
    <header className="header__nav-in">
      <Link to="/" className="button">
        <img className="header__logo-nav" src={logo} alt="Логотип страницы" />
      </Link>
      <nav className="header__regin_nav">
        <ul className="header__regin_ul">
          <li>
            <NavLink to="/signup" className="header__registr_btn">
              <button className="reg__btn">Регистрация</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" className="header__login_btn">
              <button className="log_btn">Войти</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
