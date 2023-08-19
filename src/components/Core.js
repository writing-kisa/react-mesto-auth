import React, { useEffect } from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Core(props) {

  // console.log("Props in ProtectedRouteElement ====>", props.userEmail);

  // const { userEmail } = props.userEmail;

  // console.log("userEmail внутри Core", userEmail);

  const [cards, setCards] = React.useState([]);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  const [currentUser, setCurrentUser] = React.useState(""); //карент юзер используем как значение контекста

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => setCards(res))
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    console.log("inside handleCardLike =======>", card);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
        // console.log("inside changeLikeCardStatus =======>", isLiked);
      })
      .catch((err) => console.log("ошибка в карточках по лайкам", err));
  }

  function handleCardDelete(card) {
    console.log("inside handleCardDelete =====>", card);
    api
      .deleteCard(card._id)
      .then((res) => {
        setCards((prevState) => prevState.filter((c) => c._id !== card._id));
      })
      .catch((err) =>
        console.log("ошибка в карточках по удалению карточки", err)
      );
  }

  //изменение состояния попапа при клике
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  useEffect(() => {
    api
      .getInfo()
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleUpdateUser(info) {
    api
      .changeUserInfo(info)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log("ошибка внутри handleUpdateUser ====>", err));
  }

  function handleUpdateAvatar(user) {
    // console.log('inside handleUpdateAvatar', user)
    api
      .changeUserAvatar(user.avatar)
      .then((res) => {
        // console.log("inside api.changeUserAvatar ===>", res);
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) =>
        console.log("ошибка внутри handleUpdateAvatar ====>", err)
      );
  }

  function handleAddPlaceSubmit(card) {
    //здесь отправляем новую карточку на сервер
    // console.log("card это ====>", card) //это объект, который принимает в себя инпуты: нэйм и линк

    api
      .addCard(card)
      .then((res) => {
        // console.log("res это ====>", res)
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) =>
        console.log("ошибка внутри handleAddPlaceSubmit ====>", err)
      );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header buttonText="Выйти" email={props.userEmail} />
      <Main
        onEditName={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        cards={cards}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />
      <PopupWithForm
        name="popup-before-delete"
        title="Вы уверены?"
        deleteButtonId="delete-card"
        id=""
        buttonText="Да"
        buttonTextId="delete"
      ></PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default Core;
