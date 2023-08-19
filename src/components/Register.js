import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import Header from "./Header";
import * as UserAuth from "./UserAuth";
import InfoTooltip from "./InfoTooltip";

function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(userEmail); //данные приходят
  // console.log(password); //данные приходят

  const [isSuccessful, setIsSuccessful] = useState(false); //стейт-переменная для определения успешности авторизации
  const [isTooltipOpen, setIsTooltipOpen] = useState(false); ////стейт-переменная для открытия модального окна

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
    console.log("inside handleSubmit ====>", userEmail);
    console.log("inside handleSubmit ====>", password);

    UserAuth.register(userEmail, password)
      .then((res) => {
        setIsTooltipOpen(true); //открываем модальное окно ВСЕ ПРОШЛО УСПЕШНО работает корректно благодаря установлению таймера
        setIsSuccessful(true);
        setTimeout(() => {
        navigate("/sign-in", { replace: true });
      }, 2000); // сделаю задержку, чтобы увидеть модальное окно об успешной регистрации
      })
      .catch((err) => {
        setIsTooltipOpen(true); //открываем модальное окно ЧТО-ТО ПОШЛО НЕ ТАК.... – РАБОТАЕТ КОРРЕКТНО
        setIsSuccessful(false);
        console.log(err);
      });
  }

  console.log(
    "isTooltipOpen, isSuccessful это ====>",
    isTooltipOpen,
    isSuccessful
  ); //всегда false!

  return (
    <>
      <Header linkText="Войти" path="sign-in" />
      <AuthForm
        name="register"
        title="Регистрация"
        id="register"
        buttonText="Зарегистрироваться"
        buttonTextId="login-link"
        signIn="Уже зарегистрированы?"
        loginLink="Войти"
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

export default Register;
