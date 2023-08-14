import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit_profile"
      title="Редактировать профиль"
      id="submit_name"
      deleteButtonId="name"
      buttonText="Сохранить"
      buttonTextId="name"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__set">
        <label className="form__field">
          <input
            name="name"
            type="text"
            id="text-name"
            className="form__text"
            placeholder="введите имя"
            minLength="2"
            maxLength="40"
            onChange={handleNameChange}
            value={name}
            required
          />
          <span className="text-name-error form__text-error"></span>
        </label>
        <label className="form__field">
          <input
            name="about"
            type="text"
            id="text-bio"
            className="form__text"
            placeholder="расскажите о себе"
            minLength="2"
            maxLength="200"
            onChange={handleDescriptionChange}
            value={description}
            required
          />
          <span className="text-bio-error form__text-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
