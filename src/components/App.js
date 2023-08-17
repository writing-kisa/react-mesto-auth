import React, { useState } from "react";
import "../index.css";
import { Routes, Route } from "react-router-dom"; // импортирую Routes
import Core from "./Core";
import Register from "./Register";
import Login from "./Login";
import ProtectedRouteElement from "./ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({email: "", password: ""});
  const [token, setToken] = useState(null);

  const handleLogin = (userData) => {
    setUserData(userData);
    setToken(userData.jwt);
    localStorage.setItem("jwt", userData.jwt);
    setLoggedIn(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRouteElement
            path="/"
            loggedIn={loggedIn}
            component={Core}
          ></ProtectedRouteElement>
        }
      ></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route
        path="/signin"
        element={<Login handleLogin={handleLogin} />}
      ></Route>
    </Routes>
  );
}

export default App;
