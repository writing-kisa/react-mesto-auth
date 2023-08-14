import React, { useState } from "react";
import "../index.css";
import { Routes, Route, Navigate } from "react-router-dom"; // импортирую Routes
import Core from "./Core";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={loggedIn ? <Core /> : <Navigate to="/sign-up" replace />}
      ></Route>
      <Route path="/sign-up" element={<Register />}></Route>
      <Route path="/sign-in" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
