class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // проверка ответа от сервера
  _checkResponse(res) {
    return res.ok ? res.json : Promise.reject(`Ошибка: ${res.status}`);
  }

  // получение фильмов
  getInitialMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this.checkError(res));
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
