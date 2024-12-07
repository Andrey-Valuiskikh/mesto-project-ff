// const token = '01b7ccde-d606-4726-9547-8322b83c607f'
// const baseUrl ='https://nomoreparties.co/v1/cohort-28'

function apigetCards(){
return fetch('https://nomoreparties.co/v1/cohort-28/cards', {
    headers: {
      authorization: '01b7ccde-d606-4726-9547-8322b83c607f'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
}
 export {apigetCards};