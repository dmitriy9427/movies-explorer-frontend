import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useFormValidation from "../../utils/hooks/useFormValidation";
import "./Profile.scss";

const Profile = ({ handleLogout, handleUpdateUserData, errorMessage }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const { handleChange, values, errors, isValid, resetForm, setValues } =
    useFormValidation(handleUpdateUserData);

  const [disabledInput, setDisabledInput] = React.useState(true);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  const handleProfileEdit = () => {
    setDisabledInput((state) => !state);
  };

  const handleSave = () => {
    setSuccess((state) => !state);
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
    resetForm();
  };

  return (
    <section className="profile">
      <header>
        <Header />
      </header>
      <main>
        <div className="profile_content">
          <h3 className="profile__greeting">Привет, {currentUser.name}!</h3>

          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__form-label">
              <span className="profile__form_label-text">Имя</span>
              <input
                type="text"
                name="name"
                placeholder="Введите имя"
                className="profile__input login__input-name"
                disabled={disabledInput}
                onChange={handleChange}
                value={values?.name || ""}
                required
              />
            </label>

            {errors?.name ? (
              <span className="profile__error">{errors.name}</span>
            ) : (
              ""
            )}

            <label className="profile__form-label">
              <span className="profile__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="Введите почту"
                className="profile__input login__input-email"
                disabled={disabledInput}
                onChange={handleChange}
                value={values?.email || ""}
              />
            </label>
            {errors?.email ? (
              <span className="profile__error">{errors.email}</span>
            ) : (
              ""
            )}

            {success ? (
              <span className="profile__success">
                Изменение данные прошло успешно
              </span>
            ) : (
              ""
            )}
            {disabledInput ? (
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
            ) : (
              <button
                type="submit"
                onClick={handleSave}
                className={
                  isValid
                    ? "button profile__button_type-save"
                    : "button profile__button_type-save-disabled"
                }
              >
                Сохранить
              </button>
            )}
          </form>
        </div>
      </main>
    </section>
  );
};

export default Profile;
