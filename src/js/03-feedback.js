import throttle from 'lodash.throttle';

const feedbackFormState = 'feedback-form-state';

const formBox = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

formBox.addEventListener('input', throttle(addUserData, 500));
formBox.addEventListener('submit', onFormSubmit);

formUserDraft();

const userData = {};

function addUserData() {
  userData.email = emailEl.value;
  userData.message = messageEl.value;
  localStorage.setItem(feedbackFormState, JSON.stringify(userData));
}

function formUserDraft() {
  let data = JSON.parse(localStorage.getItem(feedbackFormState));
  if (!data) {
    return;
  }
  try {
    emailEl.value = data.email;
    messageEl.value = data.message;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(userData);
  e.currentTarget.reset();
  localStorage.removeItem(feedbackFormState);
}
