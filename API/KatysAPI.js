const url = 'https://katys-server.herokuapp.com/'

export function logIn(mail, password) {
  const request = url + 'login/'
  return fetch(request, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: mail,
      secondParam: password,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error))
}