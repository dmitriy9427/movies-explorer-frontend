import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../../images/iconAccount.svg";
import "./MoviesHeader.css";

function MoviesHeader() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const openModal = React.useCallback(() => {
    setOpenPopup(true);
  }, []);

  const closeModal = (e) => {
    e.preventDefault();
    setOpenPopup(false);
    if (e.target.key === "Escape") {
      setOpenPopup(false);
    }
  };

  return (
    <>
      <nav className="navigate">
        <ul className="navigate__list">
          <li className="navigate__item">
            <NavLink to="/movies" className="navigate__movies">
              Фильмы
            </NavLink>
          </li>
          <li className="navigate__item">
            <NavLink to="/saved-movies" className="navigate__movies">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link to="/profile" className="navigate__account">
          <p className="navigate__account-text">Аккаунт</p>
          <img className="navigate__account-icon" src={icon} alt="Иконка" />
        </Link>
      </nav>
      <button className="navigate__button-open" onClick={openModal}></button>
      <BurgerMenu isOpen={openPopup} onClose={closeModal}></BurgerMenu>
    </>
  );
}

export default MoviesHeader;
