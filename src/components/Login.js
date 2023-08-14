import React from "react";

function Login() {
  return (
    <div className="login">
      <p>Регистрация</p>
      <form className="login__form">
        <input placeholder="Email"></input>
        <input placeholder="Пароль"></input>
        <button type="submit" className="login__link">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;