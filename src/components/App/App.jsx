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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  MAX_SCREEN_RESOLUTION_1280,
  MAX_SCREEN_RESOLUTION_519,
  SHOW_MOWIES_ON_THE_PAGE_7,
  SHOW_MOWIES_ON_THE_PAGE_5,
  ADD_MOVIES_7,
  ADD_MOVIES_5,
} from "../../utils/constants";
import "./App.css";

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moreMovies, setMoreMovies] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [success, setSuccess] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState("");

  const [isErrorDeleteMessage, setErrorDeleteMessage] = React.useState(false);
  const [errorServer, setErrorServer] = React.useState(false);
  const [errorRegisterInfo, setErrorRegisterInfo] = React.useState(false);
  const [errorLogin, setErrorLogin] = React.useState(false);
  const [errorEditing, setErrorEditing] = React.useState(false);
  const [errorAddMessage, setErrorAddMessage] = React.useState(false);

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
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => console.log(err));
    }
  };

  React.useEffect(() => {
    if (loggedIn) {
      getUserData();
      getDataMovies();
      if (JSON.parse(localStorage.getItem("receivedFilms"))) {
        setMovies(JSON.parse(localStorage.getItem("receivedFilms")));
      }
    }
  }, [loggedIn]);

  // регистрация пользователя!
  const handleRegistrationUser = (name, email, password) => {
    mainApi
      .registerUser(name, email, password)
      .then((res) => {
        if (res) {
          handleLoginUser(email, password);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorRegisterInfo(true);
        err.status !== 400
          ? setErrorMessage("Пользователь с таким email уже зарегистрирован.")
          : setErrorMessage("При регистрации пользователя произошла ошибка.");
      })
      .finally(() => {
        setTimeout(() => setErrorRegisterInfo(false), 5000);
      });
  };

  // вход пользователя!
  const handleLoginUser = (email, password) => {
    mainApi
      .userLogin(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setErrorLogin(false);
          mainApi.checkToken(res.token).then((res) => {
            if (res) {
              setTimeout(() => navigation("/movies"), 600);
              setLoggedIn(true);
            }
          });
        }
      })
      .catch((err) => {
        console.log(`Не удается войти в аккаунт ${err}`);
        setLoggedIn(false);
        setErrorLogin(true);
        if (err.includes(401)) {
          setErrorMessage("Вы ввели неправильный логин или пароль.");
        } else {
          setErrorMessage("Что-то пошло не так ...");
        }
      })
      .finally(() => {
        setTimeout(() => {
          setErrorLogin(false);
        }, 5000);
      });
  };

  // редактирование данных пользователя!
  const handleEditingUserData = (name, email) => {
    mainApi
      .editedUserData(name, email)
      .then((data) => {
        setSuccess(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Не удалось редактировать данные ${err}`);
        setErrorEditing(true);
      })
      .finally(() => {
        setTimeout(() => {
          setSuccess(false);
          setErrorEditing(false);
        }, 3000);
      });
  };

  const handleShowingMoreMovies = () => {
    const receivedFilms = JSON.parse(localStorage.getItem("receivedFilms"));
    setMovies(receivedFilms.slice(0, movies.length + moreMovies));
  };

  const handleCheckWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleResize = () => {
    const receivedFilms = JSON.parse(localStorage.getItem("receivedFilms"));
    if (receivedFilms === null) {
      return;
    }
    if (windowWidth >= MAX_SCREEN_RESOLUTION_1280) {
      setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_7));
      setMoreMovies(ADD_MOVIES_7);
    }
    if (
      windowWidth > MAX_SCREEN_RESOLUTION_519 &&
      windowWidth < MAX_SCREEN_RESOLUTION_1280
    ) {
      setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_7));
      setMoreMovies(ADD_MOVIES_7);
    }
    if (windowWidth <= MAX_SCREEN_RESOLUTION_519) {
      setMovies(receivedFilms.slice(0, SHOW_MOWIES_ON_THE_PAGE_5));
      setMoreMovies(ADD_MOVIES_5);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleCheckWindowWidth);
    return () => {
      window.removeEventListener("resize", handleCheckWindowWidth);
    };
  }, [windowWidth]);

  const searchMovies = (movie, movieName) =>
    movie.filter((movie) =>
      movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
    );

  // получение фильмов
  const handleSearch = (movieName, isShortFilms) => {
    setIsLoading(true);
    moviesApi
      .getMoviesApi()
      .then((movies) => {
        const before = movies.slice(0, 23);
        const after = movies.slice(24);
        const arrMovies = before.concat(after);
        localStorage.setItem("allMovies", JSON.stringify(arrMovies));
      })
      .then(() => {
        const searchArr = searchMovies(
          JSON.parse(localStorage.getItem("allMovies")),
          movieName
        );

        const filterFilms = isShortFilms
          ? searchArr.filter((item) => item.duration <= 40)
          : searchArr;

        console.log(filterFilms);
        setMovies(filterFilms);
        localStorage.setItem("receivedFilms", JSON.stringify(filterFilms));
        localStorage.setItem("searchMovieName", movieName);
        localStorage.setItem("isShortFilms", isShortFilms);
        setIsLoading(false);
        handleResize();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        if (err.status === 400) {
          setErrorServer(true);
        }
      })
      .finally(() =>
        setTimeout(() => {
          setErrorServer(false);
        }, 4000)
      );
  };

  // добавление фильма!
  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
      })
      .catch((err) => {
        console.log(`Не удалось добавить фильм ${err}`);
        setErrorAddMessage(true);
      })
      .finally(() =>
        setTimeout(() => {
          setErrorAddMessage(false);
        }, 2000)
      );
  };

  // удаление фильма!
  const handleDeleteMovie = (movie) => {
    const deleteMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(deleteMovie._id)
      .then(() => {
        const a = savedMovies.filter((el) => el._id !== deleteMovie._id);
        setSavedMovies(a);
      })
      .catch((err) => {
        console.log(`Не удалось удалить фильм. ${err}`);
        setErrorDeleteMessage(true);
      })
      .finally(() =>
        setTimeout(() => {
          setErrorDeleteMessage(false);
        }, 2000)
      );
  };

  // выход из системы
  const handleLogout = () => {
    localStorage.clear();
    navigation("/");
    setLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
    setSavedMovies([]);
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
                searchKey={localStorage.getItem("searchMovieName")}
                handleShowingMoreMovies={handleShowingMoreMovies}
                setMoreMovies={setMoreMovies}
                moreMovies={moreMovies}
                handleDeleteMovie={handleDeleteMovie}
                handleSaveMovie={handleSaveMovie}
                isErrorDeleteMessage={isErrorDeleteMessage}
                errorAddMessage={errorAddMessage}
                errorServer={errorServer}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
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
                setSavedMovies={setSavedMovies}
                handleDeleteMovie={handleDeleteMovie}
                isErrorDeleteMessage={isErrorDeleteMessage}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
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
                success={success}
                errorEditing={errorEditing}
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
              errorLogin={errorLogin}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              handleRegistrationUser={handleRegistrationUser}
              errorRegisterInfo={errorRegisterInfo}
              errorMessage={errorMessage}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
};

export default App;
