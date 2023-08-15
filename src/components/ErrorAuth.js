import React from "react";
import error from "./../images/log_error.svg";
import InfoTooltip from "./InfoTooltip";

function ErrorAuth() {
  return (
    <InfoTooltip
      imageLink={error}
      title="Что-то пошло не так! Попробуйте ещё раз."
    />
  );
}

export default ErrorAuth;
