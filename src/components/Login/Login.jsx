import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormValidation from "../../utils/hooks/useFormValidation";
import "./Login.scss";

const Login = ({ handleLoginUser, errorLogin }) => {
  const { handleChange, values, errors, isValid, resetForm } =
    useFormValidation(handleLoginUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    handleLoginUser(email, password);
    resetForm();
  };

  return (
    <section className="login">
      <div className="login__content">
        <div className="login__box-greeting">
          <Link to="/">
            <img className="login__logo" src={logo} alt="логотип" />
          </Link>

          <h3 className="login__greeting">Рады видеть!</h3>
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
          <fieldset className="login__form-content">
            <label className="login__form-label">
              <span className="login__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="login__input login__input-email"
                placeholder="Введите почту"
                value={values?.email || ""}
                onChange={handleChange}
                required
              />
            </label>
            {errors?.email && (
              <span className="login__error">{errors.email}</span>
            )}
            <label className="login__form-label">
              <span className="login__form_label-text">Пароль</span>
              <input
                type="password"
                name="password"
                className="login__input login__input-password"
                placeholder="Введите пароль"
                value={values?.password || ""}
                onChange={handleChange}
                required
              />
            </label>
            {errors?.password && (
              <span className="login__error">{errors.password}</span>
            )}
          </fieldset>
          {errorLogin ? (
            <span className="login__error">
              Вы ввели неправильный логин или пароль.
            </span>
          ) : (
            ""
          )}
          <button
            type="submit"
            className={
              isValid ? "login__button" : "login__button login__button_disabled"
            }
            disabled={!isValid}
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
};

export default Login;
