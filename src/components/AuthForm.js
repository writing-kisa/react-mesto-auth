import React from "react";
import { Link } from "react-router-dom";

function AuthForm(props) {
  return (
    <div className="authform">
      <p className="authform__title">{props.title}</p>
      <form className="authform__form">
        <input
          type="email"
          className="authform__text"
          placeholder="Email"
        ></input>
        <input
          type="password"
          className="authform__text"
          placeholder="Пароль"
        ></input>
        <button type="submit" className="authform__link">
          {props.buttonText}
        </button>
      </form>
      <div className="authform__signin">
        <p className="authform__login-text">{props.signIn}</p>
        <Link to="login" className="authform__login-link">
          {props.loginLink}
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;
