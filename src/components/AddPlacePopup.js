import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [imageLink, setImageLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setImageLink("");
  }, [props.isOpen]);

  function handleTitleChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setImageLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link: imageLink,
    });
  }

  return (
    <PopupWithForm
      name="add_card"
      title="Новое место"
      id="submit_new-card"
      deleteButtonId="new-card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      buttonTextId="new-card"
      onSubmit={handleSubmit}
    >
      <fieldset className="form__set">
        <label className="form__field">
          <input
            name="name"
            type="text"
            id="card-name"
            className="form__text"
            placeholder="название"
            minLength="2"
            maxLength="30"
            onChange={handleTitleChange}
            value={name}
            required
          />
          <span className="card-name-error form__text-error"></span>
        </label>
        <label className="form__field">
          <input
            name="link"
            type="url"
            id="card-link"
            className="form__text"
            placeholder="ссылка на картинку"
            onChange={handleLinkChange}
            value={imageLink}
            required
          />
          <span className="card-link-error form__text-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
