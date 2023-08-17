import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import Header from "./Header";
import * as UserAuth from "./UserAuth";

function Register() {
   const [userEmail, setUserEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   function handleChange(e) {
     const { name, value } = e.target; //используем деструктуризацию объекта, чтобы упростить код

     if (name === "userEmail") {
       setUserEmail(value);
     } else if (name === "password") {
       setPassword(value);
     }
   }

   function handleSubmit(e) {
     e.preventDefault();
     UserAuth.register(userEmail, password).then((res) => {
       navigate("/sign-in", { replace: true });
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
        onSubmit={handleSubmit}
        handleChange={handleChange}
        userEmail={userEmail}
        password={password}
      />
    </>
  );
}

export default Register;