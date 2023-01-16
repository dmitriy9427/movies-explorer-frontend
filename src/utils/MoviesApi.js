class MoviesApi {
  constructor({ url }) {
    this.url = url;
  }

  checkResponseStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getMoviesApi() {
    return fetch(`${this.url}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this.checkResponseStatus(res));
  }
}

const moviesApi = new MoviesApi({
    url: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;
