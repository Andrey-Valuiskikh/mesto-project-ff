function openPopup(popup) {
  popup.classList.add("popup_is-animated");
  setTimeout(() => {
  popup.classList.add("popup_is-opened"),
  1});

  document.addEventListener("keydown", handleEscKeydown);
  popup.addEventListener("click", handlePopupClick);
}

function closePopup(popup) {
  document.removeEventListener("keydown", handleEscKeydown);
  popup.removeEventListener("click", handlePopupClick);
  popup.classList.remove("popup_is-opened");
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
