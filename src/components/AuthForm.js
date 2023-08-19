import React from "react";
import { Link } from "react-router-dom";

function AuthForm(props) {

  // console.log(props.userEmail);
  // console.log(props.password);
  // console.log(props.onSubmit);

  return (
    <>
      <div className="authform">
        <p className="authform__title">{props.title}</p>
        <form className="authform__form" onSubmit={props.onSubmit}>
          <input
            name="userEmail"
            type="email"
            className="authform__text"
            placeholder="Email"
            value={props.userEmail}
            onChange={props.handleChange}
          />
          <input
            name="password"
            type="password"
            className="authform__text"
            placeholder="Пароль"
            value={props.password}
            onChange={props.handleChange}
          />
          <button
            type="submit"
            className="authform__link"
          >
            {props.buttonText}
          </button>
        </form>
        <div className="authform__signin">
          <p className="authform__login-text">{props.signIn}</p>
          <Link to="/sign-in" className="authform__login-link">
            {props.loginLink}
          </Link>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
