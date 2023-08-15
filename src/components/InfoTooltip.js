import React from "react";

function InfoTooltip(props) {
  return (
    <div className="logstatus">
      <div className="logstatus__container">
        <img className="logstatus__image" src={props.imageLink}></img>
        <p className="logstatus__title">{props.title}</p>
        <button className="logstatus__close-button"></button>
      </div>
    </div>
  );
}

export default InfoTooltip;