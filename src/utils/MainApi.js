class MainApi {
  constructor({ baseUrl, authHeaders }) {
    this._baseUrl = baseUrl;
    this._authHeaders = authHeaders;
  }

  // проверка ответа от сервера
  _checkResponse(res) {
    return res.ok ? res.json : Promise.reject(`Ошибка: ${res.status}`);
  }

  async register({ name, email, password }) {
    const url = `${this._baseUrl}/signup`;
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }

  async login({ email, password }) {
    const url = `${this._baseUrl}/signin`;
    const res = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }

  setToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  async checkToken() {
    const url = `${this._baseUrl}/users/me`;
    const headers = {
      ...this._authHeaders,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const res = await fetch(url, {
      credentials: "include",
      headers,
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }

  // получение данных пользователя
  async getUserProfile() {
    const url = `${this._baseUrl}/users/me`;
    const res = await fetch(url, {
      credentials: "include",
      method: "GET",
      headers: this._authHeaders,
    });
    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  // обновление данных пользователя
  async setUserProfile({ name, email }) {
    const url = `${this._baseUrl}/users/me`;
    const res = await fetch(url, {
      credentials: "include",
      method: "PATCH",
      headers: this._authHeaders,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }

  async getSaveMovies() {
    const url = `${this._baseUrl}/save-movies`;
    const res = await fetch(url, {
      credentials: "include",
      method: "GET",
      headers: this._authHeaders,
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }

  // добавление фильмов
  async addMovie(movie) {
    const url = `${this._baseUrl}/movies`;
    const res = await fetch(url, {
      credentials: "include",
      method: "POST",
      headers: this._authHeaders,
      body: JSON.stringify(movie),
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }

  async deleteMovie(id) {
    const url = `${this._baseUrl}/movies/${id}`;
    const res = await fetch(url, {
      credentials: "include",
      method: "DELETE",
      headers: this._authHeaders,
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    return data;
  }
}

export const moviesApi = new MainApi({
  baseUrl: "",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});
