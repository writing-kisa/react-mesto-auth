import React, {useState} from "react";
import AuthForm from "./AuthForm";
import Header from "./Header";
import * as UserAuth from "./UserAuth";
import { useNavigate } from "react-router-dom";


function Login(props) {

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(userEmail); //данные приходят
  // console.log(password); //данные приходят

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "userEmail") {
      setUserEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("inside handleSubmit ====>", userEmail);
    // console.log("inside handleSubmit ====>", password);
    UserAuth.authorize(userEmail, password).then((data) => {
      console.log("inside UserAuth.authorize ===>", data); // undefined
        // нужно проверить, есть ли у данных jwt
      if (data.jwt) {   // jwt — не определен
        setUserEmail('');
        setPassword('');
        props.handleLogin();
        navigate('/', {replace: true})
      }
  })}

  return (
    <>
      <Header linkText="Регистрация" path="sign-up" />
      <AuthForm
        name="login"
        title="Вход"
        id="login"
        buttonText="Войти"
        buttonTextId="login-link"
        userEmail={userEmail}
        password={password}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Login;
