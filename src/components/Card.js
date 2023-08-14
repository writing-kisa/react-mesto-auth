import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const { card, onLike, onClick, onDelete } = props;

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id); //есть ли у карточки мой лайк?

  const cardLikeButtonClassName = `gallery__like-button ${
    isLiked && "gallery__like-button_able"
  }`;

  // console.log('внутри card ====>', cardLikeButtonClassName);

  function handleClick() {
    //эта функция должна открывать попап с фотографией
    onClick(card);
  }

  function handleLikeClick() {
    onLike(card);
  }

  function handleDeleteClick() {
    onDelete(card);
  }

  return (
    <div className="gallery__cell">
      <img
        className="gallery__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />

      {isOwn && (
        <button
          aria-label="Удалить фотографию"
          className="gallery__delete-button"
          type="button"
          onClick={handleDeleteClick}
        />
      )}

      <div className="gallery__caption">
        <h2 className="gallery__name">{props.card.name}</h2>
        <div className="gallery__like-counter">
          <button
            aria-label="Поставить лайк"
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <h3 className="gallery__like-number">{props.card.likes.length}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
