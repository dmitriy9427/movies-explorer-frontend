class MainApi {
  constructor({ url, headers }) {
    this._url = url;
  }

  checkResponseStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getDataUser() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this.checkResponseStatus(res));
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      // credentials: "include",
      headers: {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      },
    }).then((res) => this.checkResponseStatus(res));
  }

  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        duration: movie.duration,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this.checkResponseStatus(res));
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this.checkResponseStatus(res));
  }

  registerUser(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((res) => this.checkResponseStatus(res));
  }

  userLogin(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => this.checkResponseStatus(res));
  }

  getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      // credentials: "include",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => this.checkResponseStatus(res));
  }

  editedUserData(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this.checkResponseStatus(res));
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this.checkResponseStatus(res));
  }

  logout() {
    return fetch(`${this._url}/signout`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this.checkResponseStatus(res));
  }
}

const mainApi = new MainApi({
  url: "https://bac.domainname.diplomryb.nomoredomains.club",
});

export default mainApi;
