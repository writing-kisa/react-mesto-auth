import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import * as UserAuth from "./UserAuth";


function Register() {
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
    UserAuth.register(userEmail, password).then((res) => {
      navigate("/signin", { replace: true });
    });
  }

  return (
    <>
      <Header linkText="Войти" path="signin" />
      <AuthForm
        name="register"
        title="Регистрация"
        id="register"
        buttonText="Зарегистрироваться"
        buttonTextId="login-link"
        signIn="Уже зарегистрированы?"
        loginLink="Войти"
        onChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Register;
