import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useFormValidation from "../../utils/hooks/useFormValidation";
import "./Profile.scss";

const Profile = ({
  handleLogout,
  handleUpdateUserData,
  success,
  errorEditing,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const { handleChange, values, errors, isValid, resetForm, setValues } =
    useFormValidation(handleUpdateUserData);

  const [disabledInput, setDisabledInput] = React.useState(true);

  let disableUserCurrentCheck =
    (currentUser.name === values?.name &&
      typeof values?.email === "undefined") ||
    (currentUser.email === values?.email &&
      typeof values?.email === "undefined");

  const handleProfileEdit = (e) => {
    e.preventDefault();
    setDisabledInput((disabledInput) => !disabledInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = values;
    if (!name) {
      handleUpdateUserData(currentUser.name, email);
    } else if (!email) {
      handleUpdateUserData(name, currentUser.email);
    } else {
      handleUpdateUserData(name, email);
    }

    setTimeout(() => {
      setDisabledInput((disabledInput) => !disabledInput);
    }, 1000);
    resetForm();
  };

  return (
    <section className="profile">
      <header>
        <Header />
      </header>
      <main>
        <div className="profile__content">
          <h3 className="profile__greeting">Привет, {currentUser.name}!</h3>

          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__form-label">
              <span className="profile__form-label-text">Имя</span>
              <input
                type="text"
                name="name"
                placeholder={currentUser.name}
                className="profile__input profile__input-name"
                onChange={handleChange}
                value={values?.name ?? currentUser.name}
                {...(!disabledInput ? {} : { disabled: true })}
                required
              />
            </label>

            {errors?.name ? (
              <span className="profile__error">{errors.name}</span>
            ) : (
              ""
            )}

            <label className="profile__form-label">
              <span className="profile__form-label-text">E-mail</span>
              <input
                type="email"
                name="email"
                className="profile__input profile__input-email"
                onChange={handleChange}
                value={values?.email || currentUser.email}
                {...(!disabledInput ? {} : { disabled: true })}
                required
              />
            </label>
            {errors?.email ? (
              <span className="profile__error">{errors.email}</span>
            ) : (
              ""
            )}

            {!disabledInput && (
              <>
                {success ? (
                  <span className="profile__success">
                    Изменение данныx прошло успешно
                  </span>
                ) : (
                  ""
                )}
                <button
                  type="submit"
                  disabled={!isValid || disableUserCurrentCheck}
                  className={
                    isValid || !disableUserCurrentCheck
                      ? "button profile__button-type-save"
                      : "profile__button-type-save-disabled"
                  }
                >
                  Сохранить
                </button>
              </>
            )}
          </form>
          {errorEditing ? (
            <span className="profie__error">
              Не удалось редактировать данные.
            </span>
          ) : (
            ""
          )}
          {disabledInput && (
            <ul className="profile__list">
              <li className="profile__item">
                <button
                  onClick={handleProfileEdit}
                  className="button profile__edit"
                >
                  Редактировать
                </button>
              </li>
              <li className="profile__item">
                <button
                  onClick={handleLogout}
                  className="button profile__logout"
                >
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          )}
        </div>
      </main>
    </section>
  );
};

export default Profile;
