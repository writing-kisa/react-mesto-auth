import React from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";

function Register(props) {
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
      />
    </>
  );
}

export default Register;