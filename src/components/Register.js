import React from "react";

function Register() {
  return (
    <div className="register">
      <p>Регистрация</p>
      <form className="register__form">
        <input className="register__text" placeholder="Email"></input>
        <input className="register__text" placeholder="Пароль"></input>
        <button type="submit" className="register__link">
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="login" className="register__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
