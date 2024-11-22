//  const cardTemplate = document.querySelector("#card-template").content;



function createCard(data,template, deleteCardButton, openPopup) {
    const workpieceCard = template.querySelector(".card").cloneNode(true);
    const cardTitle = workpieceCard.querySelector(".card__title");
   const cardImage = workpieceCard.querySelector(".card__image");
    cardImage.addEventListener('click', openPopup );
   cardImage.src = data.link;
   cardImage.alt = `фотография: ${data.name}`;
   cardTitle.textContent = data.name;
   workpieceCard.querySelector('.card__like-button').addEventListener('click', onLike);
   workpieceCard
     .querySelector(".card__delete-button")
     .addEventListener("click", function (evt) {
       deleteCardButton(evt.target.closest(".card"));
     }  );
  
   return workpieceCard;
 }


const deleteCard = (evt) => {
    evt.remove();
  };

  function onLike(evt)  {
    evt.currentTarget.classList.toggle('card__like-button_is-active');
  };

 export{createCard, deleteCard, onLike};


