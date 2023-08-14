import React from "react";

function AuthForm(props) {
  return (
    <div className="authform">
      <p>Регистрация</p>
      <form className="authform__form">
        <input className="authform__text" placeholder="Email"></input>
        <input className="authform__text" placeholder="Пароль"></input>
        <button type="submit" className="register__link">
          Зарегистрироваться
        </button>
      </form>
      <div className="authform__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="authform__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default AuthForm;
