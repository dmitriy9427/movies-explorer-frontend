import React, { useEffect } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import "./App.css";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState(null);
  const [checked, setChecked] = React.useState(true);
  const [checkedSaveMovies, setCheckedSaveMovies] = React.useState(true);
  const [isErrorRegisterBtn, setIsErrorRegisterBtn] = React.useState(false);
  const [isRegisterMessage, setRegisterMessage] = React.useState(false);
  const [isLoginMessage, setLoginMessage] = React.useState(false);
  const [isMessageProfile, setIsMessageProfile] = React.useState(false);
  const [isErrorLoginBtn, setIsErrorLoginBtn] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);
  const [allSavedMovies, setAllSavedMovies] = React.useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSaveMovies()
        .then((res) => {
          setSavedMovies(res);
        })
        .catch((err) => {
          console.error(err);
        });
      mainApi
        .getUserProfile()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.error(`Данные пользователя не получены ${err}`);
        });
      if (JSON.parse(localStorage.getItem("filterMovies"))) {
        setMovies(JSON.parse(localStorage.getItem("filterMovies")));
        setCheckedSaveMovies(
          JSON.parse(localStorage.getItem("checkboxSaveMovies"))
        );
      }
    }
  }, [loggedIn]);

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          handleLogOut();
          console.error(err);
        });
    }
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );

    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMovieList = savedMovie.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMovieList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChangeCheckbox = () => {
    if (location.pathname === "/movies") {
      setChecked(!checked);
      localStorage.setItem("checkbox", !checked);
    } else if (location.pathname === "/saved-movies") {
      setCheckedSaveMovies(!checkedSaveMovies);
      localStorage.setItem("checkboxSaveMovies", !checkedSaveMovies);
    }
  };

  const searchMovies = (movies, name) => {
    return movies.filter((item) =>
      item.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  const handleSearchMovies = (name) => {
    if (!JSON.parse(localStorage.getItem("allMovies"))) {
      moviesApi
        .getInitialMovies()
        .then((movies) => {
          const before = movies.slice(0, 23);
          const after = movies.slice(24);
          const arrMovies = before.concat(after);
          localStorage.setItem("allMovies", JSON.stringify(arrMovies));
        })
        .then(() => {
          setIsLoading(true);
          const searchArr = searchMovies(
            JSON.parse(localStorage.getItem("allMovies")),
            name
          );
          setMovies(searchArr);
          setIsNotFound(!movies.length || isFailed);
          localStorage.setItem("filteredMovies", JSON.stringify(searchArr));
          localStorage.setItem("searchKeyword", name);
          localStorage.setItem("checkbox", checked);
          setTimeout(() => setIsLoading(false), 1000);
        })
        .catch((err) => {
          setIsFailed(true);
          console.log(err);
        });
    } else if (JSON.parse(localStorage.getItem("allMovies"))) {
      setIsLoading(true);
      const searchArr = searchMovies(
        JSON.parse(localStorage.getItem("allMovies")),
        name
      );
      setMovies(searchArr);
      setIsNotFound(!movies.length || !isFailed);
      localStorage.setItem("filteredMovies", JSON.stringify(searchArr));
      localStorage.setItem("searchKeyword", name);
      localStorage.setItem("checkbox", checked);
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  const handleSearchSavedMovies = (name) => {
    setIsLoading(true);
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setAllSavedMovies(movies);
        localStorage.setItem("checkboxSaveMovies", checkedSaveMovies);
        const userSavedMovies = movies.filter((movie) => {
          return movie.owner === currentUser._id;
        });
        const searchArr = searchMovies(userSavedMovies, name);
        setSavedMovies(searchArr);
        setIsNotFound(!searchArr.length && !isFailed);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch((err) => console.log(err));

    const searchArr = searchMovies(allSavedMovies, name);

    setSavedMovies(searchArr);
    setIsNotFound(!searchArr.length || !isFailed);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const onRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((data) => {
        if (data) {
          onLogin(email, password);
        }
        setIsErrorRegisterBtn(false);
      })
      .catch((err) => {
        err.status !== 400
          ? setRegisterMessage("Пользователь с таким email уже зарегестрирован")
          : setRegisterMessage("При регистрации произошла ошибка");
        setIsErrorRegisterBtn(true);
      });
  };

  const onLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsErrorLoginBtn(false);
          mainApi.checkToken(res.token).then((res) => {
            if (res) {
              setTimeout(() => navigate("/movies"), 800);
              setLoggedIn(true);
            }
          });
        }
      })
      .catch((err) => {
        if (err.includes(401)) {
          setLoginMessage("Вы ввели неправильный логин или пароль.");
        }
        setIsErrorLoginBtn(true);
      });
  };

  const onUpdateUser = (name, email) => {
    mainApi
      .setUserProfile(name, email)
      .then((data) => {
        setIsMessageProfile(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => setIsMessageProfile(false), 1000);
      });
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
    setCurrentUser({});
    setIsErrorRegisterBtn(false);
    setRegisterMessage(false);
    setLoginMessage(false);
    setIsErrorLoginBtn(false);
    setIsLoading(false);
    setIsFailed(false);
    setMovies([]);
    setSavedMovies([]);
    setChecked(true);
    setCheckedSaveMovies(true);
    setIsNotFound(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                onSubmit={handleSearchMovies}
                movies={movies}
                isLoading={isLoading}
                isFailed={isFailed}
                isNotFound={isNotFound}
                searchKeyword={localStorage.getItem("searchKeyword")}
                onCheckbox={handleChangeCheckbox}
                checked={checked}
                checkedSaveMovies={checkedSaveMovies}
                savedMovies={savedMovies}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                allSavedMovies={allSavedMovies}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                savedMovies={savedMovies}
                onSubmit={handleSearchSavedMovies}
                movies={movies}
                isLoading={isLoading}
                isFailed={isFailed}
                isNotFound={isNotFound}
                searchKeyword={localStorage.getItem("searchKeyword")}
                onCheckbox={handleChangeCheckbox}
                checked={checked}
                checkedSaveMovies={checkedSaveMovies}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                allSavedMovies={allSavedMovies}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                onLogout={handleLogOut}
                onUpdate={onUpdateUser}
                isMessageProfile={isMessageProfile}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <Register
              onRegister={onRegister}
              isErrorRegisterBtn={isErrorRegisterBtn}
              isRegisterMessage={isRegisterMessage}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              onLogin={onLogin}
              isLoginMessage={isLoginMessage}
              isErrorLoginBtn={isErrorLoginBtn}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
