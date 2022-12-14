import React from "react";
import "./NavTab.scss";

function NavTab() {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul className="navigation__items">
          <li className="button navigation__item">О проекте</li>
          <li className="button navigation__item">Технологии</li>
          <li className="button navigation__item">Студент</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTab;
