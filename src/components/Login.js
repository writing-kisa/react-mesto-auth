import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";
import * as UserAuth from "../utils/UserAuth";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

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
    UserAuth.authorize(userEmail, password)
      .then((data) => {
        if (data.token) {
          setUserEmail(userEmail);
          setPassword("");
          props.handleLogin();
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    </>
  );
}

export default Login;
