import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = (props) => {
  const { component: Component, loggedIn, ...rest } = props;
  return loggedIn ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/sign-up" replace />
  );
};

export default ProtectedRouteElement;