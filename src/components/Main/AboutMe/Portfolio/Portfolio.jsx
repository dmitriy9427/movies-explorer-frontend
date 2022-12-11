import React from "react";
import strelka from "../../../../images/strelka.svg";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <section className="portfolio">
      <ul className="portfolio__list">
        <h3 className="portfolio__title">Портфолио</h3>
        <li>
          <a
            href="https://dmitriy9427.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link-a"
          >
            <p className="portfolio__link_text">Статичный сайт</p>
            <img className="portfolio__link_img" src={strelka} alt="стрелка" />
          </a>
        </li>
        <hr className="portfolio__link_underline" />
        <li>
          <a
            href="https://dmitriy9427.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link-a"
          >
            <p className="portfolio__link_text">Адаптивный сайт</p>
            <img className="portfolio__link_img" src={strelka} alt="стрелка" />
          </a>
        </li>
        <hr className="portfolio__link_underline" />
        <li>
          <a
            href="https://domainname.ryabov1994.nomoredomains.icu/"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link-a"
          >
            <p className="portfolio__link_text">Одностраничное приложение</p>
            <img className="portfolio__link_img" src={strelka} alt="стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
