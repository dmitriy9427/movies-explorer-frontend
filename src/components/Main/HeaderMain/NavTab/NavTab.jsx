import React from "react";
import "./NavTab.scss";

function NavTab() {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul className="navigation__items">
          <li className="button navigation__item">
            <a className="navigation__item-a" href="#about-project">
              О проекте
            </a>
          </li>
          <li className="button navigation__item">
            <a className="navigation__item-a" href="#techs">
              Технологии
            </a>
          </li>
          <li className="button navigation__item">
            <a className="navigation__item-a" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTab;
