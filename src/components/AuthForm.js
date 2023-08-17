import React from "react";
import { Link } from "react-router-dom";
// import CorrectAuth from "./CorrectAuth";
// import ErrorAuth from "./ErrorAuth";

function AuthForm(props) {

  return (
    <>
      <div className="authform">
        <p className="authform__title">{props.title}</p>
        <form className="authform__form" onSubmit={props.handleSubmit}>
          <input
            name="userEmail"
            type="email"
            className="authform__text"
            placeholder="Email"
            value={props.userEmail}
            onChange={props.handleChange}
          ></input>
          <input
            name="password"
            type="password"
            className="authform__text"
            placeholder="Пароль"
            value={props.password}
            onChange={props.handleChange}
          ></input>
          <button
            type="submit"
            className="authform__link"
          >
            {props.buttonText}
          </button>
        </form>
        <div className="authform__signin">
          <p className="authform__login-text">{props.signIn}</p>
          <Link to="/signin" className="authform__login-link">
            {props.loginLink}
          </Link>
        </div>
      </div>
      {/* <CorrectAuth /> */}
      {/* <ErrorAuth /> */}
    </>
  );
}

export default AuthForm;
