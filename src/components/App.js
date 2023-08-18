import React, { useState, useEffect } from "react";
import "../index.css";
import { Routes, Route, useNavigate } from "react-router-dom"; // импортирую Routes
import Core from "./Core";
import Register from "./Register";
import Login from "./Login";
import ProtectedRouteElement from "./ProtectedRoute";
import * as UserAuth from "./UserAuth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const navigate = useNavigate();

  const tokenCheck = () => {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      console.log("jwt это ====>", jwt);
      // проверим токен
      UserAuth.getContent(jwt).then((res) => {
        if (res) {
          //это для того, чтобы вытащить из айпи данные и вставить имейл затем в шапку профиля
          //  const userData = {
          //    id: res.id,
          //    email: res.email,
          //  };

          // авторизуем пользователя
          setLoggedIn(true);

          // setUserData(userData);

          navigate("/", { replace: true });
        }
      });
    }
  };

  useEffect(() => {
    // настало время проверить токен
    tokenCheck();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouteElement
            path="/"
            loggedIn={loggedIn}
            element={Core}
          ></ProtectedRouteElement>
        }
      ></Route>
      <Route path="/sign-up" element={<Register />}></Route>
      <Route
        path="/sign-in"
        element={<Login handleLogin={handleLogin} />}
      ></Route>
    </Routes>
  );
}

export default App;
