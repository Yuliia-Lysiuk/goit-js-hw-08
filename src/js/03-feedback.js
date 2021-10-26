import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form")

let localValueForm = {};

formEl.addEventListener("input", throttle(getInputValue, 500))

function getInputValue () {
   const formData = new FormData(formEl);
    formData.forEach((value, name) => (localValueForm[name] = value));

    localStorage.setItem("feedback-form-state", JSON.stringify(localValueForm))
   
}

if (localStorage.hasOwnProperty("feedback-form-state")) {
  localValueForm = JSON.parse(localStorage.getItem("feedback-form-state"));

  for (let name in localValueForm) {
    formEl[name].value = localValueForm[name];
  }
}

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    console.log(localValueForm);
    localStorage.removeItem("feedback-form-state");
    localValueForm = {};
    formEl.reset();
}