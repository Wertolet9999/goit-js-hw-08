import throttle from 'lodash.throttle';

const formRefs = {
    formEl: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
}
const STORAGE_KEY = 'feedback-form-state';
formRefs.formEl.addEventListener('input', throttle(setDataInput), 500);
formRefs.formEl.addEventListener('submit', getDataSubmit);

function setDataInput() {
    const data = {
        email: formRefs.email.value,
        message: formRefs.message.value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function getDataSubmit(event) {
    event.preventDefault(); 
    if (!formRefs.email.value || !formRefs.message.value) {
       return alert("enter the fields")
    }
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function getData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
     if (savedData) {
        formRefs.email.value = savedData.email;
        formRefs.message.value = savedData.message;
  }
}
getData();