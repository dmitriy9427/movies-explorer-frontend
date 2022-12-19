class MainApi {
  constructor({ baseUrl, authHeaders }) {
    this._baseUrl = baseUrl;
    this._authHeaders = authHeaders;
  }

  // проверка ответа от сервера
  _checkResponse(res) {
    return res.ok ? res.json : Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  // получение данных пользователя
  getUserProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._checkResponse);
  }

  // обновление данных пользователя
  setUserProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  getSaveMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  // добавление фильмов
  addMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  async deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then((res) => {
      return this._checkResponser(res);
    });
  }
}

const moviesApi = new MainApi({
  baseUrl: "https://bac.domainname.diplomryb.nomoredomains.club",
});

export default moviesApi;
