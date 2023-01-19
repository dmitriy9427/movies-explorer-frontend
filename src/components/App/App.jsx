import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./App.css";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMesage, setErrorMessage] = React.useState("");

  const navigation = useNavigate();

  // получение данных пользователя
  const getUserData = () => {
    if (loggedIn) {
      mainApi
        .getDataUser()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => handleLogout(err));
    }
  };

  // регистрация пользователя
  const handleRegistrationUser = ({ name, email, password }) => {
    setIsLoading(true);
    mainApi
      .registerUser(name, email, password)
      .then((res) => {
        handleLoginUser(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.res);
      });
  };

  // вход пользователя
  const handleLoginUser = ({ email, password }) => {
    setIsLoading(true);
    mainApi
      .userLogin(email, password)
      .then((res) => {
        setLoggedIn(true);
        getUserData();
        navigation("/movies");
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage("Что-то пошло не так ...");
        setLoggedIn(false);
        console.log(err.status);
      });
  };

  // редактирование данных пользователя
  const handleEditingUserData = ({ name, email }) => {
    setIsLoading(true);
    mainApi
      .editedUserData(name, email)
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        handleLogout(err);
        setErrorMessage(err.res);
      });
  };

  // получение фильмов
  const getMovies = (movieName, isShortFilms) => {
    setIsLoading(true);
    moviesApi
      .getMoviesApi()
      .then((res) => {
        let searchMovies = res.filter((movie) =>
          movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
        );
        const foundMovies = isShortFilms
          ? searchMovies.filter((item) => item.duration <= 40)
          : searchMovies;
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.res);
      });
  };

  // добавление фильма
  const handleAddSaveMovies = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
      })
      .catch((err) => {
        setErrorMessage(err.res);
      });
  };

  // удаление фильма
  const handleDeleteMovie = (movie) => {
    const deleteMovie = savedMovies.find(
      (el) => el._id === movie._id && el.owner === currentUser._id
    );
    if (!deleteMovie) return;
    mainApi
      .deleteMovie(deleteMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((el) => el._id !== deleteMovie._id));
      })
      .catch((err) => {
        setErrorMessage(err.res);
      });
  };

  // получение токена
  const tokenCheck = () => {
    mainApi.getUserData().then((res) => {
      if (res.data._id) {
        setCurrentUser(res.data);
        setLoggedIn(true);
      }
    });
  };

  // использование токена
  React.useEffect(() => {
    if (loggedIn) {
      tokenCheck();
    }
  }, [loggedIn]);

  // выход из системы
  const handleLogout = () => {
    mainApi.logout().then((res) => {
      localStorage.clear();
      setLoggedIn(false);
      setCurrentUser({});
      setMovies([]);
      setSavedMovies([]);
      navigation("/");
      console.log(res);
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              movies={movies}
              keyWord={localStorage.getItem("KeyWord")}
              getMovies={getMovies}
              handleDeleteMovie={handleDeleteMovie}
              savedMovies={savedMovies}
              isLoading={isLoading}
              handleAddSaveMovies={handleAddSaveMovies}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              handleLogout={handleLogout}
              handleUpdateUserData={handleEditingUserData}
              errorMesage={errorMesage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              handleLogin={handleLoginUser}
              errorMesage={errorMesage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              register={handleRegistrationUser}
              errorMesage={errorMesage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
};

export default App;
