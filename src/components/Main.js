import React from "react";
// import api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext); //подписываемся на контекст с помощью хука, который используется в функциональных компонентах
  //userContext = объект текущего пользователя, полученный из контекста

  // console.log("in main!!! ===>", currentUser);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__avatar-block">
            <img
              className="profile__avatar"
              alt="аватарка пользователя"
              src={currentUser.avatar}
            />
            <button
              aria-label="Изменить аватарку"
              className="profile__button-change-avatar"
              onClick={props.onEditAvatar}
              type="button"
            ></button>
          </div>
          <div className="profile__main-info">
            <div className="profile__name-button">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                aria-label="Редактировать имя"
                className="profile__button-change-name"
                onClick={props.onEditName}
                type="button"
              ></button>
            </div>
            <p className="profile__bio">{currentUser.about}</p>
          </div>
        </div>
        <button
          aria-label="Добавить фотографию"
          className="profile__button-add-photo"
          onClick={props.onAddPlace}
          type="button"
        ></button>
      </section>

      <div id="card-container" className="gallery">
        {props.cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onClick={props.onCardClick}
              onLike={props.onCardLike}
              onDelete={props.onCardDelete}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
