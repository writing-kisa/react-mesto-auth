import React from "react";

function PopupWithForm(props) {
  return (
    <div
      id={props.name}
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="form"
          id={`${props.id}_form`}
          method="post"
          name={`${props.name}_form`}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            aria-label={props.buttonText}
            id={`${props.buttonTextId}_save_button`}
            className="form__save-button"
            type="submit"
          >
            {props.buttonText}
          </button>
        </form>
        <button
          aria-label="Закрыть окно"
          id={`${props.deleteButtonId}_close_button`}
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
