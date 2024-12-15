//  const cardTemplate = document.querySelector("#card-template").content;
import { data } from "jquery";
import { apideleteCard, apiLikeCard } from "./api";

function createCard(data, template, deleteCardButton, openPopup, userId) {
  const workpieceCard = template.querySelector(".card").cloneNode(true);
  const cardTitle = workpieceCard.querySelector(".card__title");
  const cardImage = workpieceCard.querySelector(".card__image");
  const cardLikeCount = workpieceCard.querySelector(".card__like-counter");
  const deleteButton = workpieceCard.querySelector(".card__delete-button");
  const likeButton = workpieceCard.querySelector(".card__like-button");
  cardImage.addEventListener("click", openPopup);
  cardImage.src = data.link;
  cardImage.alt = `фотография: ${data.name}`;
  cardTitle.textContent = data.name;
  cardLikeCount.textContent = data.likes.length;

  const isCardLiked = data.likes.find((card) => card["_id"] === userId);

  if (userId !== data.owner._id) {
    deleteButton.style.display = "none";
  } else {
    deleteButton.addEventListener("click", function (evt) {
      deleteCardButton(evt.target.closest(".card"), data._id);
    });
  }

  if (isCardLiked) {
    likeButton.classList.add(".card__like-button_is-active");
  }
  likeButton.addEventListener("click", (evt) => {
    onLike(likeButton, data._id, cardLikeCount);
  });

  return workpieceCard;
}

const deleteCard = (evt, id) => {
  apideleteCard(id).then((data) => {
    evt.remove();
  });
};

function onLike(button, id, LikeCount) {
  const isliked = button.classList.contains("card__like-button_is-active");
  apiLikeCard(id, isliked).then((cardData) => {
    button.classList.toggle("card__like-button_is-active");
    LikeCount.textContent = cardData.likes.length;
  });
}

export { createCard, deleteCard, onLike };
