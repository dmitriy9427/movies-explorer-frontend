import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <h5 className="footer__text">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h5>
      <hr className="footer__line" />
      <div className="footer__list">
        <p className="footer__date">&copy;&nbsp;2022</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>

          <a
            href="https://github.com/dmitriy9427"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
