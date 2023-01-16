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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [checked, setChecked] = React.useState(true);

  const navigation = useNavigate();

  const getUserData = () => {
    if (loggedIn) {
      mainApi
        .getDataUser()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdateUserData = () => {};

  const handleDeleteMovie = () => {};

  const tokenCheck = () => {
    mainApi.getUserData().then((res) => {
      if (res.data._id) {
        setCurrentUser(res.data);
        setLoggedIn(true);
      }
    });
  };

  React.useEffect(() => {
    if (loggedIn) {
      tokenCheck()
    }
  }, [loggedIn]);

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
        <Route path="/movies" element={<Movies />} />
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
              handleUpdateUserData={handleUpdateUserData}
            />
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
