// @todo: Темплейт карточки
import { initialCards } from "./scripts/components/cards.js";
import "./pages/index.css";
import { createCard, deleteCard, onLike } from "./scripts/components/card.js";
import { openPopup, closePopup } from "./scripts/components/modal.js";
import {
  clearValidation,
  enableValidation,
} from "./scripts/components/validation.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
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
const profileImage = document.querySelector(".profile__image");

const cardFormEdit = document.forms["edit-profile"];
const profileNameInput = cardFormEdit.elements.name;
const profileDescriptionInput = cardFormEdit.elements.description;

const popupEditAvatar = document.querySelector(".popup_type_new-avatar");
const avatarForm = document.forms["edit-avatar"];
const avatarFormInput = avatarForm.elements.link;
const avatarEditButton = document.querySelector(".profile__image_edit-button");

let myId = "";


editPopapButton.addEventListener("click", (evt) => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  clearValidation(cardFormEdit, validationConfig);
  openPopup(popupTypeEdit);
});

avatarEditButton.addEventListener("click", () => {
  clearValidation(avatarForm, validationConfig);
  openPopup(popupEditAvatar);
});

addProfileButton.addEventListener("click", (evt) => {
  clearValidation(cardForm, validationConfig);
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
  apiaddCard({ name: cardNameInput.value, link: cardLinkInput.value }).then(
    (newCardData) => {
      

      placesList.prepend(
        createCard(
          newCardData,
          cardTemplate,
          deleteCard,
          handleCardImageClick,
          myId
        )
      );
      cardForm.reset();
     
      closePopup(popupTypeNewCard);
    }
  );
}

avatarForm.addEventListener("submit", handleAvatarFormSubmit);

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  apiupdateAvatar(avatarFormInput.value).then((userData) => {
    profileImage.style.backgroundImage = `url(${userData.avatar})`;
    closePopup(popupEditAvatar);
    avatarForm.reset();
  });
}

cardForm.addEventListener("submit", handleCardFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  apieditProfile({
    name: profileNameInput.value,
    about: profileDescriptionInput.value,
  }).then((userData) => {
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    
    closePopup(popupTypeEdit);
  });
  
}

cardFormEdit.addEventListener("submit", handleProfileFormSubmit);

enableValidation(validationConfig);

import {
  apigetCards,
  apigetProfile,
  apieditProfile,
  apiLikeCard,
  apiupdateAvatar,
 
  apideleteCard,
  apiaddCard,
} from "./scripts/components/api.js";

Promise.all([apigetProfile(), apigetCards()]).then(([userData, cards]) => {
  profileName.textContent = userData.name;
  profileDescription.textContent = userData.about;
  profileImage.style.backgroundImage = `url(${userData.avatar})`;
  myId = userData._id;
  cards.forEach((card) => {
    placesList.append(
      createCard(card, cardTemplate, deleteCard, handleCardImageClick, myId)
    );
  });
});


