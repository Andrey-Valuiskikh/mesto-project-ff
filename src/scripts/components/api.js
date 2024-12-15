// const token = "01b7ccde-d606-4726-9547-8322b83c607f";
// const baseUrl = "https://nomoreparties.co/v1/wff-cohort-28";
const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-28",
  headers: {
    authorization: "01b7ccde-d606-4726-9547-8322b83c607f",
    "Content-Type": "application/json",
  },
};

function handleRes(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

function apigetCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(handleRes);
}

function apigetProfile() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(handleRes);
}

function apieditProfile({ name, about }) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(handleRes);
}

function apiaddCard({ name, link }) {
  return checkImgUrl(link)
    .then(
      fetch(`${config.baseUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
          name,
          link,
        }),
      })
    )
    .then(handleRes);
}

function apideleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleRes);
}

// function apilikeCard(cardId) {
//   return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
//     method: 'PUT',
//     headers: config.headers,

//   }).then(handleRes);
// }

function apiLikeCard(cardId, isLiked) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: config.headers,
  }).then(handleRes);
}

const apiupdateAvatar = (url) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: url,
    }),
  }).then(handleRes);
  // );
};

export {
  apigetCards,
  apigetProfile,
  apieditProfile,
  apiLikeCard,
  //  apiunLikeCard,
  apideleteCard,
  apiaddCard,
  apiupdateAvatar,
};
