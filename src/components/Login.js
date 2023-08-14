import React from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";

function Login(props) {
  return (
    <>
      <Header />
      {/* <Header buttonText="Регистрация" /> */}
      <AuthForm
        name="login"
        title="Вход"
        id="login"
        buttonText="Войти"
        buttonTextId="login-link"
        // onSubmit={handleSubmit}
      >
        <div className="login">
          <p>{props.title}</p>
          <form className="login__form">
            <input placeholder="Email"></input>
            <input placeholder="Пароль"></input>
            <button type="submit" className="login__link">
              {props.buttonText}
            </button>
          </form>
        </div>
      </AuthForm>
    </>
  );
}

export default Login;