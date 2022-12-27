import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/hooks/useFormWithValidation";
import "./Profile.css";

export default function Profile({ onUpdateUser, onLogout, isMessageProfile }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isEditInput, setIsEditInput] = React.useState(true);
  const controlInput = useFormWithValidation();
  const { nameErr, emailErr } = controlInput.errors;
  const errorClassName = !controlInput.isValid
    ? "profile__error profile__error_visible"
    : "profile__error";

  const toggleInput = (e) => {
    e.preventDefault();
    setIsEditInput((state) => !state);
  };

  let disableUserCurrentCheck =
    (currentUser.name === controlInput?.values?.name &&
      typeof controlInput?.values?.email === "undefined") ||
    (currentUser.email === controlInput?.values?.email &&
      typeof controlInput?.values?.email === "undefined");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = controlInput.values;
    if (!name) {
      onUpdateUser(currentUser.name, email);
    } else if (!email) {
      onUpdateUser(name, currentUser.email);
    } else {
      onUpdateUser(name, email);
    }
    setTimeout(() => setIsEditInput((state) => !state), 1000);
    controlInput.resetForm();
  };

  let classNameMessageBtn = isMessageProfile
    ? "profile__button-msg"
    : "profile__button-msg profile__button-msg_hidden";

  return (
    <section className="profile">
      <header>
        <Header />
      </header>
      <main>
        {" "}
        <div className="profile_content">
          <h3 className="profile__greeting">Привет, {currentUser.name}!</h3>

          <form className="profile__form" noValidate onSubmit={handleSubmit}>
            <label className="profile__form-label">
              <span className="profile__form_label-text">Имя</span>
              <input
                type="text"
                name="name"
                placeholder="Введите имя"
                className="profile__input login__input-name"
                pattern="[A-Za-zА-Яа-яЁё\s-]+"
                onChange={controlInput.handleChange || ""}
                value={controlInput?.values?.name ?? currentUser.name}
                {...(!isEditInput ? {} : { disabled: true })}
                required
              />
            </label>
            <span className={errorClassName}>{nameErr}</span>

            <label className="profile__form-label">
              <span className="profile__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="profile__input login__input-email"
                placeholder={currentUser.email}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={controlInput.handleChange || ""}
                value={controlInput?.values?.email ?? currentUser.email}
                {...(!isEditInput ? {} : { disabled: true })}
                required
              />
            </label>
            <span className={errorClassName}>{emailErr}</span>

            {!isEditInput && (
              <>
                <span className={classNameMessageBtn}>
                  Изменение данных прошло успешно!
                </span>
                <button
                  className="profile__button"
                  disabled={disableUserCurrentCheck || !controlInput.isValid}
                >
                  Сохранить
                </button>
              </>
            )}
          </form>
          {isEditInput && (
            <ul className="profile__list">
              <li className="profile__item">
                <button className="button profile__edit" onClick={toggleInput}>
                  Редактировать
                </button>
              </li>
              <li className="profile__item">
                <button className="button profile__logout" onClick={onLogout}>
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          )}
        </div>
      </main>
    </section>
  );
}
