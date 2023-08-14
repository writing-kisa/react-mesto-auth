import React from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <>
      <Header />
      {/* <Header buttonText="Вход" /> */}
      <AuthForm
        name="register"
        title="Регистрация"
        id="register"
        buttonText="Зарегистрироваться"
        buttonTextId="login-link"
        signIn="Уже зарегистрированы?"
        loginLink="Войти"
        // onSubmit={handleSubmit}
      >
        <div className="authform">
          <p>{props.title}</p>
          <form className="authform__form">
            <input className="authform__text" placeholder="Email"></input>
            <input className="authform__text" placeholder="Пароль"></input>
            <button type="submit" className="register__link">
              {props.buttonText}
            </button>
          </form>
          <div className="authform__signin">
            <p>{props.signIn}</p>
            <Link to="login" className="authform__login-link">
              {props.loginLink}
            </Link>
          </div>
        </div>
      </AuthForm>
    </>
  );
}

export default Register;
