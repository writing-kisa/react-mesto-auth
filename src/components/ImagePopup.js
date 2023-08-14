import React from "react";

function ImagePopup(props) {
  // console.log(props.card.link);
  // console.log(props.card.name);
  return (
    <>
      <div
        id="full-size-popup"
        className={`popup popup_type_photo-background ${
          props.card.link ? "popup_opened" : ""
        }`}
      >
        <figure className="popup__photo-container">
          <img
            className="popup__full-size-photo"
            src={`${props.card.link ? props.card.link : ""}`}
            alt={props.card.name}
          />
          <figcaption className="popup__photo-name">
            {props.card.name}
          </figcaption>
          <button
            aria-label="Закрыть окно"
            id="full-photo_close_button"
            className="popup__close-button"
            type="button"
            onClick={props.onClose}
          ></button>
        </figure>
      </div>
    </>
  );
}

export default ImagePopup;
