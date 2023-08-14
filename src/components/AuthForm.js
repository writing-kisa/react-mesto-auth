import React from "react";
import { Link } from "react-router-dom";

function AuthForm(props) {
  return (
    <div className="authform">
      <p className="authform__title">Регистрация</p>
      <form className="authform__form">
        <input className="authform__text" placeholder="Email"></input>
        <input className="authform__text" placeholder="Пароль"></input>
        <button type="submit" className="authform__link">
          Зарегистрироваться
        </button>
      </form>
      <div className="authform__signin">
        <p className="authform__login-text">Уже зарегистрированы?</p>
        <Link to="login" className="authform__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;
