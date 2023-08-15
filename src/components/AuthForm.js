import React, { useState } from "react";
import { Link } from "react-router-dom";
// import CorrectAuth from "./CorrectAuth";
// import ErrorAuth from "./ErrorAuth";

function AuthForm(props) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

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
    //здесь должна быть функциональность сабмита
  }

  return (
    <>
      <div className="authform">
        <p className="authform__title">{props.title}</p>
        <form className="authform__form" onSubmit={handleSubmit}>
          <input
            name="userEmail"
            type="email"
            className="authform__text"
            placeholder="Email"
            value={userEmail}
            onChange={handleChange}
          ></input>
          <input
            name="password"
            type="password"
            className="authform__text"
            placeholder="Пароль"
            value={password}
            onChange={handleChange}
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
      {/* <CorrectAuth /> */}
      {/* <ErrorAuth /> */}
    </>
  );
}

export default AuthForm;
