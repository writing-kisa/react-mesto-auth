import React from "react";
import correct from "./../images/log_correct.svg";
import InfoTooltip from "./InfoTooltip";

function CorrectAuth() {
  return (<InfoTooltip imageLink={correct} title="Вы успешно зарегистрировались!"/>);
}

export default CorrectAuth;