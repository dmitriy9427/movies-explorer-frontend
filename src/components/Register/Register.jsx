import React from "react";
import "./Register.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <div className="register__content">
        <div className="register__box-greeting">
          <Link to="/">
            <img className="register__logo" src={logo} alt="логотип" />
          </Link>
          <h3 className="register__greeting">Добро пожаловать!</h3>
        </div>
        <form className="register__form">
          <fieldset className="register__form-content">
            <label className="register__form-label">
              <span className="register__form_label-text">Имя</span>
              <input
                type="text"
                name="name"
                className="register__input register__input-name"
                placeholder="Введите имя"
                required
              />
            </label>
            <span className="register__error"></span>

            <label className="register__form-label">
              <span className="register__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="register__input register__input-email"
                placeholder="Введите почту"
                required
              />
            </label>
            <span className="register__error"></span>

            <label className="register__form-label" htmlFor="password">
              <span className="register__form_label-text">Пароль</span>
              <input
                type="password"
                name="password"
                className="register__input register__input-password"
                placeholder="Введите пароль"
                required
              />
            </label>
            <span className="register__error"></span>
          </fieldset>
        </form>

        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
        <div className="register__box">
          <p className="register__box-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="button register__box-link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}
