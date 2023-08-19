import React from "react";
import correct from "./../images/log_correct.svg";
import error from "./../images/log_error.svg";

function InfoTooltip(props) {
  const imageLink = props.isSuccessful ? correct : error;
  const title = props.isSuccessful
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так.";

  return (
    <div className="logstatus">
      <div className="logstatus__container">
        <img className="logstatus__image" src={imageLink} alt="status" />
        <p className="logstatus__title">{title}</p>
        <button
          className="logstatus__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;

