import React from "react";
import "./Register.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import useFormWithValidation from "../../utils/hooks/useFormWithValidation";

export default function Register({
  onRegister,
  isErrorRegisterBtn,
  isRegisterMessage,
}) {
  const controlInput = useFormWithValidation();

  const { name, email, password } = controlInput.errors;

  const errorRegister = !controlInput.isValid
    ? "register__error register__error_visible"
    : "register__error";

  const errorClassNameBtn = isErrorRegisterBtn
    ? "register__error register__error_visible"
    : "register__error";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = controlInput.values;
    onRegister(name, email, password);
    controlInput.resetForm();
  };

  return (
    <section className="register">
      <div className="register__content">
        <div className="register__box-greeting">
          <Link to="/" className="button">
            <img className="register__logo" src={logo} alt="логотип" />
          </Link>
          <h3 className="register__greeting">Добро пожаловать!</h3>
        </div>

        <form onSubmit={handleSubmit} className="register__form" noValidate>
          <fieldset className="register__form-content">
            <label className="register__form-label">
              <span className="register__form_label-text">Имя</span>
              <input
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                pattern="[A-Za-zА-Яа-яЁё\s-]+"
                onChange={controlInput.handleChange}
                value={controlInput?.values?.name || ""}
                className="register__input register__input-name"
                placeholder="Введите имя"
                required
              />
            </label>
            <span className={errorRegister}>{name}</span>

            <label className="register__form-label">
              <span className="register__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="register__input register__input-email"
                placeholder="Введите Email"
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={controlInput.handleChange}
                value={controlInput?.values?.email || ""}
                required
              />
            </label>
            <span className={errorRegister}>{email}</span>

            <label className="register__form-label" htmlFor="password">
              <span className="register__form_label-text">Пароль</span>
              <input
                type="password"
                name="password"
                className="register__input register__input-password"
                placeholder="Введите пароль"
                minLength="4"
                onChange={controlInput.handleChange}
                value={controlInput?.values?.password || ""}
                required
              />
            </label>
            <span className={errorRegister}>{password}</span>
            <button
              type="submit"
              className="register__button"
              disabled={!controlInput.isValid}
            >
              Зарегистрироваться
            </button>
          </fieldset>
        </form>
        <span className={errorClassNameBtn}>{isRegisterMessage}</span>
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
