import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import * as UserAuth from "./UserAuth";

const Login = ({handleLogin}) => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e) {
    const { name, value } = e.target; //используем деструктуризацию объекта, чтобы упростить код
    if (name === "userEmail") {
      setUserEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!userEmail || !password) {
      setMessage("Необходимо заполнить все поля!");
      return;
    }

    UserAuth.authorization(userEmail, password).then((data) => {
      if (!data) {
        setMessage("Что-то пошло не так...");
      }

      if (data.jwt) {
        // setToken(data.jwt);
        setUserEmail("");
        setPassword("");
        handleLogin();
        navigate("/", { replace: true });
      }
    });
  }

  return (
    <>
      <Header linkText="Регистрация" path="signup" />
      <AuthForm
        name="login"
        title="Вход"
        id="login"
        buttonText="Войти"
        buttonTextId="login-link"
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Login;
