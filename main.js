(()=>{"use strict";function e(e,t,r,o){var c=t.querySelector(".card").cloneNode(!0),a=c.querySelector(".card__title"),s=c.querySelector(".card__image");return s.addEventListener("click",o),s.src=e.link,s.alt="фотография: ".concat(e.name),a.textContent=e.name,c.querySelector(".card__like-button").addEventListener("click",n),c.querySelector(".card__delete-button").addEventListener("click",(function(e){r(e.target.closest(".card"))})),c}var t=function(e){e.remove()};function n(e){e.currentTarget.classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",c),e.addEventListener("click",a)}function o(e){document.removeEventListener("keydown",c),e.removeEventListener("click",a),e.classList.remove("popup_is-opened")}function c(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}function a(e){e.target.classList.contains("popup_is-opened")&&o(e.target),e.target.classList.contains("popup__close")&&o(e.target.closest(".popup_is-opened"))}var s=document.querySelector("#card-template").content,d=document.querySelector(".places__list"),p=document.querySelector(".profile__edit-button"),i=document.querySelector(".popup_type_edit"),u=document.querySelector(".profile__add-button"),l=document.querySelector(".popup_type_new-card"),m=document.querySelector(".popup__image"),_=document.querySelector(".popup__caption"),v=document.querySelector(".popup_type_image"),y=document.forms["new-place"],f=y.elements["place-name"],k=y.elements.link,g=document.querySelector(".profile__title"),q=document.querySelector(".profile__description"),L=document.forms["edit-profile"],S=L.elements.name,E=L.elements.description;function x(e){m.src=e.currentTarget.src,m.alt=e.currentTarget.alt,_.textContent=e.currentTarget.alt,r(v)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(n){d.append(e(n,s,t,x))})),p.addEventListener("click",(function(e){S.value=g.textContent,E.value=q.textContent,r(i)})),u.addEventListener("click",(function(e){r(l)})),y.addEventListener("submit",(function(n){n.preventDefault(),d.prepend(e({name:f.value,link:k.value},s,t,x)),y.reset(),o(l)})),L.addEventListener("submit",(function(e){e.preventDefault(),g.textContent=S.value,q.textContent=E.value,o(i)}))})();