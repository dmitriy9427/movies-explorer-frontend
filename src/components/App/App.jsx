import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";
import {
  MAX_SCREEN_RESOLUTION_1280,
  MAX_SCREEN_RESOLUTION_519,
  SHOW_MOWIES_ON_THE_PAGE_5,
  SHOW_MOWIES_ON_THE_PAGE_4,
  SHOW_MOWIES_ON_THE_PAGE_3,
  ADD_MOVIES_3,
} from "../../utils/constants";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moreMovies, setMoreMovies] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorRegBtn, setErrorRegBtn] = React.useState(false);
  const [errorLoginBtn, setErrorLoginBtn] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const navigation = useNavigate();
  const location = useLocation();

  // получение токена!
  const tokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      mainApi
        .checkToken(localStorage.getItem("jwt"))
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigation(location.pathname);
          }
        })
        .catch((err) => {
          handleLogout();
          console.error(err);
        });
    }
  };

  // использование токена!
  React.useEffect(() => {
    tokenCheck();
  }, []);

  const getUserData = () => {
    if (loggedIn) {
      mainApi
        .getDataUser()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const getDataMovies = () => {
    if (loggedIn) {
      mainApi
        .getMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    getUserData();
    getDataMovies();
  }, []);

  // регистрация пользователя!
  const handleRegistrationUser = (name, email, password) => {
    mainApi
      .registerUser(name, email, password)
      .then((res) => {
        if (res) {
          handleLoginUser(email, password);
        }
        setErrorRegBtn(false);
      })
      .catch((err) => {
        if (err.status !== 400) {
          setErrorMessage("При регистрации пользователя произошла ошибка.");
          setErrorRegBtn(true);
        }
      });
  };

  // вход пользователя!
  const handleLoginUser = (email, password) => {
    mainApi
      .userLogin(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setErrorLoginBtn(false);
          mainApi.checkToken(res.token).then((res) => {
            if (res) {
              setTimeout(() => navigation("/movies"), 600);
              setLoggedIn(true);
            }
          });
        }
      })
      .catch(() => {
        setErrorMessage("Вы ввели неправильный логин или пароль.");
        setLoggedIn(false);
        setErrorLoginBtn(true);
      });
  };

  // редактирование данных пользователя!
  const handleEditingUserData = ({ name, email }) => {
    mainApi
      .editedUserData(name, email)
      .then(() => {
        setCurrentUser(name, email);
      })
      .catch((err) => {
        setErrorMessage("Не удалось редактировать данные");
      });
  };

  const handleShowingMoreMovies = () => {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    setMovies(foundMovies.slice(0, movies.length + moreMovies));
  };

  const handleCheckWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleResize = () => {
    const receivedFilms = JSON.parse(localStorage.getItem("foundMovies"));
    if (receivedFilms === null) {
      return;
    }
    if (windowWidth >= MAX_SCREEN_RESOLUTION_1280) {
      setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_5));
      setMoreMovies(ADD_MOVIES_3);
    }
    if (
      windowWidth > MAX_SCREEN_RESOLUTION_519 &&
      windowWidth < MAX_SCREEN_RESOLUTION_1280
    ) {
      setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_4));
      setMoreMovies(ADD_MOVIES_3);
    }
    if (windowWidth <= MAX_SCREEN_RESOLUTION_519) {
      setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_3));
      setMoreMovies(ADD_MOVIES_3);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleCheckWindowWidth);
  }, [windowWidth]);

  // получение фильмов
  const getMovies = (movieName, isShortFilms) => {
    setIsLoading(true);
    moviesApi
      .getMoviesApi()
      .then((data) => {
        const searchMovies = data.filter((movie) =>
          movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
        );
        const foundMovies = isShortFilms
          ? searchMovies.filter((item) => item.duration <= 40)
          : searchMovies;
        localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
        localStorage.setItem("movieName", movieName);
        localStorage.setItem("isShortFilms", isShortFilms);
        setIsLoading(false);
        handleResize();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        setErrorMessage();
      });
  };

  const handleSearch = (movieName, isShortFilms) => {
    getMovies(movieName, isShortFilms);
  };

  // добавление фильма!
  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
        console.log(setSavedMovies([data, ...savedMovies]));
      })
      .catch((err) => {
        console.log(`Не удалось добавить фильм ${err}`);
      });
  };

  // удаление фильма!
  const handleDeleteMovie = (movie) => {
    const deleteMovie = savedMovies.find((el) => el.movieId === movie.movieId);
    mainApi
      .deleteMovie(deleteMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((el) => el._id !== deleteMovie._id));
      })
      .catch((err) => {
        console.log(`Не удалось удалить фильм. ${err}`);
        setErrorMessage(err);
      });
  };

  // выход из системы
  const handleLogout = () => {
    mainApi.logout().then((res) => {
      localStorage.clear();
      navigation("/");
      setLoggedIn(false);
      setCurrentUser({});
      setMovies([]);
      setSavedMovies([]);
      setErrorRegBtn(false);
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                isLoading={isLoading}
                movies={movies}
                setMovies={setMovies}
                savedMovies={savedMovies}
                handleSearch={handleSearch}
                handleShowingMoreMovies={handleShowingMoreMovies}
                setMoreMovies={setMoreMovies}
                moreMovies={moreMovies}
                handleDeleteMovie={handleDeleteMovie}
                handleSaveMovie={handleSaveMovie}
                errorMessage={errorMessage}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                isLoading={isLoading}
                savedMovies={savedMovies}
                handleDeleteMovie={handleDeleteMovie}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                handleLogout={handleLogout}
                handleUpdateUserData={handleEditingUserData}
                errorMessage={errorMessage}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              handleLoginUser={handleLoginUser}
              errorMessage={errorMessage}
              errorLoginBtn={errorLoginBtn}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              handleRegistrationUser={handleRegistrationUser}
              errorMessage={errorMessage}
              errorRegBtn={errorRegBtn}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
};

export default App;
