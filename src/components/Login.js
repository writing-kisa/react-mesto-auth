import React from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";

function Login(props) {
  return (
    <>
      <Header linkText="Регистрация" path="sign-up" />
      <AuthForm
        name="login"
        title="Вход"
        id="login"
        buttonText="Войти"
        buttonTextId="login-link"
      />
    </>
  );
}

export default Login;
