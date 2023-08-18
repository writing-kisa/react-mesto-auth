export const BASE_URL = "https://auth.nomoreparties.co";

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      // Если ответ успешный, вернем данные, в противном случае - выбросим ошибку
      if (!response.ok) {
        return response.json().then((err) => Promise.reject(err));
      }
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log("inside authorize ===>", data);
      if (data) {
        localStorage.setItem("jwt", data.jwt);
        return data;
      }
      return Promise.reject(new Error("Токен не найден"));
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
