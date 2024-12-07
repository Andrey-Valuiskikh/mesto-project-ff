// @todo: Темплейт карточки
import { initialCards } from "./scripts/components/cards.js";
import "./pages/index.css";
import { createCard, deleteCard, onLike } from "./scripts/components/card.js";
import { openPopup, closePopup } from "./scripts/components/modal.js";
import { clearValidation, enableValidation } from "./scripts/components/validation.js";

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

const editPopapButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");

const addProfileButton = document.querySelector(".profile__add-button");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");

const popupImageImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__caption");
const popupTypeImage = document.querySelector(".popup_type_image");

const cardForm = document.forms["new-place"];
const cardNameInput = cardForm.elements["place-name"];
const cardLinkInput = cardForm.elements.link;

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardFormEdit = document.forms["edit-profile"];
const profileNameInput = cardFormEdit.elements.name;
const profileDescriptionInput = cardFormEdit.elements.description;

// @todo: Вывести карточки на страницу

initialCards.forEach((cardnum) => {
  placesList.append(
    createCard(cardnum, cardTemplate, deleteCard, handleCardImageClick)
  );
});

editPopapButton.addEventListener("click", (evt) => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  openPopup(popupTypeEdit);
});

addProfileButton.addEventListener("click", (evt) => {
  openPopup(popupTypeNewCard);
});

function handleCardImageClick(evt) {
  popupImageImage.src = evt.currentTarget.src;
  popupImageImage.alt = evt.currentTarget.alt;
  popupImageCaption.textContent = evt.currentTarget.alt;
  openPopup(popupTypeImage);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  placesList.prepend(
    createCard(
      {
        name: cardNameInput.value,
        link: cardLinkInput.value,
      },
      cardTemplate,
      deleteCard,
      handleCardImageClick
    )
  );
  cardForm.reset();
  clearValidation();
  closePopup(popupTypeNewCard);
}

cardForm.addEventListener("submit", handleCardFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(popupTypeEdit);
}

cardFormEdit.addEventListener("submit", handleProfileFormSubmit);

enableValidation(validationConfig);

import { apigetCards } from "./scripts/components/api.js";


apigetCards();
