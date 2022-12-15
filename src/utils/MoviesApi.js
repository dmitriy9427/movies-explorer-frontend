class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // получение фильмов
  async getInialMovies() {
    const url = `${this._baseUrl}/movies`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }
}

export const moviesApi = new MoviesApi({
  Url: "https://api.nomoreparties.co/beatfilm-movies",
});
