import React from "react";
import "./Login.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <div className="login__content">
        <div className="login__box-greeting">
          <Link to="/">
            <img className="login__logo" src={logo} alt="логотип" />
          </Link>

          <h3 className="login__greeting">Рады видеть!</h3>
        </div>

        <form className="login__form">
          <fieldset className="login__form-content">
            <label className="login__form-label">
              <span className="login__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="login__input login__input-email"
                placeholder="Введите почту"
                required
              />
            </label>
            <span className="profile__error"></span>

            <label className="login__form-label">
              <span className="login__form_label-text">Пароль</span>
              <input
                type="password"
                name="password"
                className="login__input login__input-password"
                placeholder="Введите пароль"
                required
              />
            </label>
            <span className="profile__error"></span>
          </fieldset>
        </form>

        <button type="submit" className="login__button">
          Войти
        </button>
        <div className="login__box">
          <p className="login__box-text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="button login__box-link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}
