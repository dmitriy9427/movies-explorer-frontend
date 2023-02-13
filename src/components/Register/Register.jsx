import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormValidation from "../../utils/hooks/useFormValidation";
import "./Register.scss";

const Register = ({
  handleRegistrationUser,
  errorRegisterInfo,
  errorMessage,
}) => {
  const { handleChange, values, errors, isValid } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    handleRegistrationUser(name, email, password);
  };

  return (
    <section className="register">
      <div className="register__content">
        <div className="register__box-greeting">
          <Link to="/">
            <img className="register__logo" src={logo} alt="логотип" />
          </Link>
          <h3 className="register__greeting">Добро пожаловать!</h3>
        </div>
        <form className="register__form" onSubmit={handleSubmit}>
          <fieldset className="register__form-content">
            <label className="register__form-label">
              <span className="register__form-text">Имя</span>
              <input
                type="text"
                name="name"
                className="register__input register__input-name"
                placeholder="Введите имя"
                pattern="[A-Za-zА-Яа-яЁё\s-]+"
                value={values?.name || ""}
                onChange={handleChange}
                minLength="2"
                required
              />
            </label>
            {!isValid.name && (
              <span className="register__error">{errors.name}</span>
            )}
            <label className="register__form-label">
              <span className="register__form-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="register__input register__input-email"
                placeholder="Введите почту"
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                value={values?.email || ""}
                onChange={handleChange}
                required
              />
            </label>
            {!isValid.email ? (
              <span className="register__error">{errors.email}</span>
            ) : (
              ""
            )}
            <label className="register__form-label" htmlFor="password">
              <span className="register__form-text">Пароль</span>
              <input
                type="password"
                name="password"
                className="register__input register__input-password"
                placeholder="Введите пароль"
                value={values?.password || ""}
                onChange={handleChange}
                minLength="4"
                required
              />
            </label>
            {!isValid.password && (
              <span className="register__error">{errors.password}</span>
            )}
          </fieldset>
          {errorRegisterInfo ? (
            <span className="register__error">{errorMessage}</span>
          ) : (
            ""
          )}
          <button
            type="submit"
            className={
              isValid ? "register__button" : "register__button register__button-disabled"
            }
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>

        <div className="register__box">
          <p className="register__box-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="button register__box-link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
