// 1. add listener for sumbit form
// 2. add listener for change form

const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');
const nameInput = document.querySelector('[name="name"]');
const formElem = document.querySelector(".login-form");
const submitBtnElem = document.querySelector(".submit-button");
const errorElem = document.querySelector(".error-text");

// algo
//1.
//2.
//3.
function onInputChange(event) {
  console.log(event);
}

emailInput.addEventListener("input", onInputChange);
passwordInput.addEventListener("input", onInputChange);
nameInput.addEventListener("input", onInputChange);

// algo
//1. gather form data
//2.http request
//3.handle responce
function onFormSubmit(event) {
  event.preventDefault();
  let user = Object.fromEntries(new FormData(formElem));
  console.log(user);

  fetch(serverUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(JSON.stringify(data));
      clearForm();
    })
    .catch(onError);
}

formElem.addEventListener("sumbit", onFormSubmit);
