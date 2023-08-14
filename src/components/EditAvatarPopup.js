import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const avatarRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="change-avatar"
      title="Обновить аватар"
      id="change-avatar"
      deleteButtonId="avatar-link"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      buttonTextId="avatar-link"
      onSubmit={handleSubmit}
    >
      <fieldset className="form__set">
        <label className="form__field">
          <input
            ref={avatarRef}
            name="avatar"
            type="url"
            id="avatar-link"
            className="form__text"
            placeholder="ссылка на новый аватар"
            required
          />
          <span className="avatar-link-error form__text-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
