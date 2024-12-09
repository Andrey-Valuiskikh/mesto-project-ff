 const token = '01b7ccde-d606-4726-9547-8322b83c607f'
 const baseUrl ='https://nomoreparties.co/v1/wff-cohort-28'

function apigetCards(){
return fetch(`${baseUrl}/cards`, {
    headers: {
      authorization: '01b7ccde-d606-4726-9547-8322b83c607f'
    }
  })
    .then(res => res.json())
    // .then((result) => {
    //   console.log(result);
    // });
}

function apigetProfile(){
  return fetch('https://nomoreparties.co/v1/wff-cohort-28/users/me',{
    headers:{
      authorization:[token]
    }
  })
  .then(res => res.json())
}

 export {apigetCards, apigetProfile};