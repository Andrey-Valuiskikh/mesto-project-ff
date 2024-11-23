function openPopup(evt) {
  evt.classList.add("popup_is-animated");
  evt.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscKeydown);
  evt.addEventListener("click", handlePopupClick);
}

function closePopup(evt) {
  document.removeEventListener("keydown", handleEscKeydown);
  evt.removeEventListener("click", handlePopupClick);
  evt.classList.remove("popup_is-opened");
}

function handleEscKeydown(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closePopup(popup);
  }
}

function handlePopupClick(evt) {
  if (evt.target.classList.contains("popup_is-opened")) {
    closePopup(evt.target);
  }
  if (evt.target.classList.contains("popup__close")) {
    closePopup(evt.target.closest(".popup_is-opened"));
  }
}

export { openPopup, closePopup };
