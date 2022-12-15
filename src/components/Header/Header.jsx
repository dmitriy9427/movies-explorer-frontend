import React, {useCallback} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import icon from "../../images/iconAccount.svg";
import "./Header.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Header() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const openModal = useCallback(() => {
    setOpenPopup(true);
  }, []) ;

  const closeModal = (e) => {
    e.preventDefault();
    if (e.key === "Escape") {
      setOpenPopup(false);
    } else {
      setOpenPopup(false);
    }
  };

  React.useEffect(() => {
    if (openModal) {
      document.addEventListener("keydown", closeModal);

    }
    return () => document.removeEventListener("keydown", closeModal);
  }, [openModal]);

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
      <button className="header__button_burger-menu" onClick={openModal} />
      <BurgerMenu isOpen={openPopup} onClose={closeModal} />
    </header>
  );
}

export default Header;
