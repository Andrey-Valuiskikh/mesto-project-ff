// @todo: Темплейт карточки
 const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
let placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
  function createCard(data, cardDelfun){
 const workpieceCard = cardTemplate.querySelector('.card').cloneNode(true);

workpieceCard.querySelector('.card__image').src = data.link;
workpieceCard.querySelector('.card__title').textContent = data.name;
workpieceCard.querySelector('.card__delete-button').addEventListener('click', function (evt){
    cardDelfun(evt.target.closest(".card"));
});
 return workpieceCard;

  };

  
// @todo: Функция удаления карточки

const cardDel = (event) => {
     event.remove();
};


// @todo: Вывести карточки на страницу

initialCards.forEach((cardnum) => {
    placesList.append(createCard(cardnum, cardDel));
  });