import React from "react";
import "./Login.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../utils/hooks/useFormWithValidation";

export default function Login({ onLogin, isLoginMessage, isErrorLoginBtn }) {
  const controlInput = useFormWithValidation();
  const { email, password } = controlInput.errors;
  const errorClassName = !controlInput.isValid
    ? "login__error login__error_visible"
    : "login__error";

  const errorClassNameBtn = isErrorLoginBtn
    ? "login__error login__error_visible"
    : "login__error";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = controlInput.values;
    onLogin(email, password);
    controlInput.resetForm();
  };

  return (
    <section className="login">
      <div className="login__content">
        <div className="login__box-greeting">
          <Link to="/" className="button">
            <img className="login__logo" src={logo} alt="логотип" />
          </Link>
          <h3 className="login__greeting">Рады видеть!</h3>
        </div>

        <form onSubmit={handleSubmit} noValidate className="login__form">
          <fieldset className="login__form-content">
            <label className="login__form-label">
              <span className="login__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="login__input login__input-email"
                placeholder="Введите Email"
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={controlInput.handleChange}
                value={controlInput?.values?.email || ""}
                required
              />
            </label>
            <span className={errorClassName}>{email}</span>

            <label className="login__form-label">
              <span className="login__form_label-text">Пароль</span>
              <input
                type="password"
                name="password"
                className="login__input login__input-password"
                placeholder="Введите пароль"
                onChange={controlInput.handleChange}
                value={controlInput?.values?.password || ""}
                required
              />
            </label>
            <span className={errorClassName}>{password}</span>
          </fieldset>
          <span className={errorClassNameBtn}>{isLoginMessage}</span>
          <button
            type="submit"
            className="login__button"
            disabled={!controlInput.isValid}
          >
            Войти
          </button>
        </form>

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
