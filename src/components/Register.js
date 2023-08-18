import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import Header from "./Header";
import * as UserAuth from "./UserAuth";

function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

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
    console.log("inside handleSubmit ====>", userEmail);
    console.log("inside handleSubmit ====>", password);

    UserAuth.register(userEmail, password)
      .then((res) => {
        navigate("/sign-in", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    </>
  );
}

export default Register;
