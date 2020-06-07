const message = document.querySelector('.form__message--js');
const load = document.querySelector('.form__button--load-js');
const save = document.querySelector('.form__button--save-js');
const bold = document.querySelector('.form__button--bold-js');
const italic = document.querySelector('.form__button--italic-js');
const underline = document.querySelector('.form__button--underline-js');
const size = document.querySelector('.form__button--size-js');

const content = {
    text: null,
    bold: false,
    italic: false,
    underline: false,
    size: 12
}

bold.addEventListener('click', (e) => {
    e.preventDefault();
    message.classList.toggle('bold');
    bold.classList.toggle('button__background');
    if (content.bold == false) content.bold = true;
    else content.bold = false;
    console.log(`bold ${content.bold}`);
})

italic.addEventListener('click', (e) => {
    e.preventDefault();
    message.classList.toggle('italic');
    italic.classList.toggle('button__background');
    if (content.italic == false) content.italic = true;
    else content.italic = false;
    console.log(`italic ${content.italic}`);
})

underline.addEventListener('click', (e) => {
    e.preventDefault();
    message.classList.toggle('underline');
    underline.classList.toggle('button__background');
    if (content.underline == false) content.underline = true;
    else content.underline = false;
    console.log(`underline ${content.underline}`);
})

save.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(message.value);
    content.text = message.value;
    console.log(content.text);
    console.log(content);
    const jsonContent = JSON.stringify(content);
    localStorage.setItem('message', jsonContent);
    console.log(jsonContent);
})

load.addEventListener('click', (e) => {
    e.preventDefault();
    const stringifyContent = localStorage.getItem('message');
    const objContent = JSON.parse(stringifyContent);
    message.value = objContent.text;
    if (objContent.bold == true) {
        message.classList.add('bold');
        bold.classList.toggle('button__background');
    }
    if (objContent.italic == true) {
        message.classList.add('italic');
        italic.classList.toggle('button__background');
    }
    if (objContent.underline == true) {
        message.classList.add('underline');
        underline.classList.toggle('button__background');
    }
});


function download(text, name, type) {
    const file = new Blob([text], { type: type });

}

document.cookie = "testoweCiastko = wartosc";
console.log(document.cookie);
console.log(localStorage);


const person = {
    name: 'tomek',
    age: 24
};

console.log(person);

const jsonPerson = JSON.stringify(person);

console.log(jsonPerson);
localStorage.setItem('person2', person);
localStorage.setItem('person', jsonPerson);
const stringifyPerson = localStorage.getItem('person');

console.log(stringifyPerson);

const newPerson = JSON.parse(stringifyPerson);

console.log(newPerson);