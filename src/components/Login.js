import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";
import * as UserAuth from "./UserAuth";
import { useNavigate } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";

function Login(props) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSuccessful, setIsSuccessful] = useState(false); //стейт-переменная для определения успешности авторизации
  const [isTooltipOpen, setIsTooltipOpen] = useState(false); ////стейт-переменная для открытия модального окна

  // console.log(userEmail); //данные приходят
  // console.log(password); //данные приходят

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "userEmail") {
      setUserEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("inside handleSubmit ====>", userEmail);
    // console.log("inside handleSubmit ====>", password);
    UserAuth.authorize(userEmail, password)
      .then((data) => {
        // console.log("полученная дата при авторизации ===>", data); //сюда попадает токен {token: 'кодмногозначительный'}
        // console.log("data.token это====>", data.token); //undefined
        if (data.token) {
          setUserEmail("");
          setPassword("");
          props.handleLogin();
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        setIsTooltipOpen(true); //открываем модальное окно ЧТО-ТО ПОШЛО НЕ ТАК
        setIsSuccessful(false);
        console.log(err);
      });
  }

  console.log(isTooltipOpen, isSuccessful);

  return (
    <>
      <Header linkText="Регистрация" path="sign-up" />
      <AuthForm
        name="login"
        title="Вход"
        id="login"
        buttonText="Войти"
        buttonTextId="login-link"
        userEmail={userEmail}
        password={password}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
      {isTooltipOpen && (
        <InfoTooltip
          isSuccessful={isSuccessful}
          onClose={() => setIsTooltipOpen(false)} // функция для закрытия модального окна
        />
      )}
    </>
  );
}

export default Login;
