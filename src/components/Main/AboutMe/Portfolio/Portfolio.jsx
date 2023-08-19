import React from "react";
import strelka from "../../../../images/strelka.svg";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__li">
          <a
            href="https://dmitriy9427.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link-a"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <img className="portfolio__link-img" src={strelka} alt="стрелка" />
          </a>
        </li>
        <li className="portfolio__li">
          <a
            href="https://dmitriy9427.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link-a"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img className="portfolio__link-img" src={strelka} alt="стрелка" />
          </a>
        </li>

        <li className="portfolio__li">
          <a
            href="https://dmitriy9427.github.io/react-mesto-auth/"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link-a"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img className="portfolio__link-img" src={strelka} alt="стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
