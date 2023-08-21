import React, { useState, useEffect } from "react";
import "../index.css";
import { Routes, Route, useNavigate } from "react-router-dom"; // импортирую Routes
import Core from "./Core";
import Register from "./Register";
import Login from "./Login";
import ProtectedRouteElement from "./ProtectedRoute";
import * as UserAuth from "../utils/UserAuth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (email) => {
    setLoggedIn(true);
    setUserEmail(email);
  };

  const tokenCheck = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      // console.log("jwt это ====>", jwt);
      // проверим токен
      UserAuth.getContent(jwt)
        .then((res) => {
          if (res) {
            // console.log("почта пользователя =====>", res.data.email);
            // const email = { email: res.data.email }; //это для того, чтобы вытащить из айпи данные и вставить имейл затем в шапку профиля
            // авторизуем пользователя
            setLoggedIn(true);

            setUserEmail(res.data.email);

            navigate("/", { replace: true });
          }
        })
        .catch((err) => {
          console.error("Ошибка при получении данных:", err);
        });
    }
  };

  useEffect(() => {
    // настало время проверить токен
    tokenCheck();
  }, []);

  function signOut() {
    localStorage.removeItem("jwt");
    navigate("/sign-in", { replace: true });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouteElement
            path="/"
            loggedIn={loggedIn}
            component={Core}
            userEmail={userEmail}
            onClick={signOut}
          />
        }
      />
      <Route path="/sign-up" element={<Register />}></Route>
      <Route
        path="/sign-in"
        element={<Login handleLogin={handleLogin} />}
      ></Route>
    </Routes>
  );
}

export default App;
