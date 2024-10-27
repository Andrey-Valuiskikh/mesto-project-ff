// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(data, deleteCardButton) {
  const workpieceCard = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = workpieceCard.querySelector(".card__title");
  const cardImage = workpieceCard.querySelector(".card__image");
  cardImage.src = data.link;
  cardImage.alt = `фотография: ${data.name}`;
  cardTitle.textContent = data.name;
  workpieceCard
    .querySelector(".card__delete-button")
    .addEventListener("click", function (evt) {
      deleteCardButton(evt.target.closest(".card"));
    });
  return workpieceCard;
}

// @todo: Функция удаления карточки

const deleteCard = (event) => {
  event.remove();
};

// @todo: Вывести карточки на страницу

initialCards.forEach((cardnum) => {
  placesList.append(createCard(cardnum, deleteCard));
});
