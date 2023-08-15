import React, { useState } from "react";
import "../index.css";
import { Routes, Route } from "react-router-dom"; // импортирую Routes
import Core from "./Core";
import Register from "./Register";
import Login from "./Login";
import ProtectedRouteElement from "./ProtectedRoute";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
      <Route path="/sign-up" element={<Register />}></Route>
      <Route path="/sign-in" element={<Login />}></Route>
    </Routes>
  );
}

export default App;


      

