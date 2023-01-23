import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./Profile.scss";

const Profile = (props) => {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <section className="profile">
      <header>
        <Header />
      </header>
      <main>
        <div className="profile_content">
          <h3 className="profile__greeting">Привет, {currentUser.name}!</h3>

          <form className="profile__form">
            <label className="profile__form-label">
              <span className="profile__form_label-text">Имя</span>
              <input
                type="text"
                name="name"
                placeholder="Введите имя"
                className="profile__input login__input-name"
              />
            </label>
            <span className="profile__error"></span>

            <label className="profile__form-label">
              <span className="profile__form_label-text">E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="Введите почту"
                className="profile__input login__input-email"
              />
            </label>
            <span className="profile__error"></span>
            <ul className="profile__list">
              <li className="profile__item">
                <button className="button profile__edit">Редактировать</button>
              </li>
              <li className="profile__item">
                <button
                  onClick={props.handleLogout}
                  className="button profile__logout"
                >
                  Выйти из аккаунта
                </button>
              </li>
            </ul>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Profile;
