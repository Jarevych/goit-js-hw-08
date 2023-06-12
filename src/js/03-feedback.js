import throttle from 'lodash.throttle';

const STORAGE_KEY = 'userData';

const refs = {
    form: document.querySelector("form"),
    inputEmail: document.querySelector("input"),
    inputTextarea: document.querySelector("textarea"),
};

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onInputArea, 500));

const formData = {};

function onInputArea(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
};

function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.clear();
};

function restorePage (){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedData) {
         refs.inputTextarea.value = savedData.message || "";
         refs.inputEmail.value = savedData.email || "";
    };

};

document.addEventListener('DOMContentLoaded', restorePage);