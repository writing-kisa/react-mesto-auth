import React from "react";
import "../index.css";
import { Routes, Route } from 'react-router-dom'; // импортирую Routes
import Root from "./Root";

// import Register from './Register';
// import Login from "./Login";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Root/>}></Route>
    </Routes>
    
  );
}

export default App;

// <PopupWithForm name="edit_profile" title="Редактировать профиль"/>

{
  /* <PopupWithForm
        name="edit_profile"
        title="Редактировать профиль"
        id="submit_name"
        deleteButtonId="name"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        buttonTextId="name"
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
              required
            />
            <span className="text-bio-error form__text-error"></span>
          </label>
        </fieldset>
      </PopupWithForm> */
}


 // const [cards, setCards] = React.useState([]);
  // const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
  //   React.useState(false);
  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
  //   React.useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  // const [selectedCard, setSelectedCard] = React.useState({
  //   name: "",
  //   link: "",
  // });

  // const [currentUser, setCurrentUser] = React.useState(""); //карент юзер используем как значение контекста

  // useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((res) => setCards(res))
  //     .catch((err) => console.log(err));
  // }, []);

  // function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some((i) => i._id === currentUser._id);

  //   console.log("inside handleCardLike =======>", card);

  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   api
  //     .changeLikeCardStatus(card._id, isLiked)
  //     .then((newCard) => {
  //       setCards((state) =>
  //         state.map((c) => (c._id === card._id ? newCard : c))
  //       );
  //       // console.log("inside changeLikeCardStatus =======>", isLiked);
  //     })
  //     .catch((err) => console.log("ошибка в карточках по лайкам", err));
  // }

  // function handleCardDelete(card) {
  //   console.log("inside handleCardDelete =====>", card);
  //   api
  //     .deleteCard(card._id)
  //     .then((res) => {
  //       setCards((prevState) => prevState.filter((c) => c._id !== card._id));
  //     })
  //     .catch((err) =>
  //       console.log("ошибка в карточках по удалению карточки", err)
  //     );
  // }

  // //изменение состояния попапа при клике
  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  // }

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  // }

  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  // }

  // useEffect(() => {
  //   api
  //     .getInfo()
  //     .then((res) => setCurrentUser(res))
  //     .catch((err) => console.log(err));
  // }, []);

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }

  // function closeAllPopups() {
  //   setIsEditAvatarPopupOpen(false);
  //   setIsEditProfilePopupOpen(false);
  //   setIsAddPlacePopupOpen(false);
  //   setSelectedCard({ name: "", link: "" });
  // }

  // function handleUpdateUser(info) {
  //   api
  //     .changeUserInfo(info)
  //     .then((res) => {
  //       setCurrentUser(res);
  //       closeAllPopups();
  //     })
  //     .catch((err) => console.log("ошибка внутри handleUpdateUser ====>", err));
  // }

  // function handleUpdateAvatar(user) {
  //   // console.log('inside handleUpdateAvatar', user)
  //   api
  //     .changeUserAvatar(user.avatar)
  //     .then((res) => {
  //       // console.log("inside api.changeUserAvatar ===>", res);
  //       setCurrentUser(res);
  //       closeAllPopups();
  //     })
  //     .catch((err) =>
  //       console.log("ошибка внутри handleUpdateAvatar ====>", err)
  //     );
  // }

  // function handleAddPlaceSubmit(card) {
  //   //здесь отправляем новую карточку на сервер
  //   // console.log("card это ====>", card) //это объект, который принимает в себя инпуты: нэйм и линк

  //   api
  //     .addCard(card)
  //     .then((res) => {
  //       // console.log("res это ====>", res)
  //       setCards([res, ...cards]);
  //       closeAllPopups();
  //     })
  //     .catch((err) =>
  //       console.log("ошибка внутри handleAddPlaceSubmit ====>", err)
  //     );
  // }
