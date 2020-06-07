const message = document.querySelector('.form__message--js');
const load = document.querySelector('.form__button--load-js');
const save = document.querySelector('.form__button--save-js');
const bold = document.querySelector('.form__button--bold-js');
const italic = document.querySelector('.form__button--italic-js');
const underline = document.querySelector('.form__button--underline-js');
const big = document.querySelector('.form__button--bigger-js');
const small = document.querySelector('.form__button--smaller-js');
const sizeDisplay = document.querySelector('.fontSize-displayer');


let content = {
    text: null,
    bold: false,
    italic: false,
    underline: false,
    size: 16
}

let size = content.size;

function setContent() {
    sizeDisplay.innerHTML = content.size;
    message.style.fontSize = `${content.size}px`;

    if (content.bold == true) {
        message.style.fontWeight = `bold`;

        bold.classList.add('button__background');
    } else {
        message.style.fontWeight = ``;
        bold.classList.remove('button__background');
    }
    if (content.italic == true) {

        message.style.fontStyle = `italic`;
        italic.classList.add('button__background');
    } else {
        message.style.fontStyle = ``;
        italic.classList.remove('button__background');
    }
    if (content.underline == true) {

        message.style.textDecoration = `underline`;
        underline.classList.add('button__background');
    } else {
        message.style.textDecoration = ``;
        underline.classList.remove('button__background');
    }
}

setContent();


bold.addEventListener('click', (e) => {
    e.preventDefault();
    if (content.bold == false) content.bold = true;
    else content.bold = false;
    console.log(`bold ${content.bold}`);
    setContent();
})

italic.addEventListener('click', (e) => {
    e.preventDefault();
    if (content.italic == false) content.italic = true;
    else content.italic = false;
    console.log(`italic ${content.italic}`);
    setContent();
})

underline.addEventListener('click', (e) => {
    e.preventDefault();
    if (content.underline == false) content.underline = true;
    else content.underline = false;
    console.log(`underline ${content.underline}`);
    setContent();
})

big.addEventListener('click', (e) => {
    e.preventDefault();
    size = ++(content.size);
    console.log(size);
    message.style.fontSize = `${size}px`;
    console.log(message.style.fontSize);
    content.size = size;
    setContent();

})

small.addEventListener('click', (e) => {
    e.preventDefault();
    size = --(content.size);
    console.log(size);
    message.style.fontSize = `${size}px`;
    console.log(message.style.fontSize);
    content.size = size;
    setContent();
})

save.addEventListener('click', (e) => {
    e.preventDefault();
    content.text = message.value;
    const jsonContent = JSON.stringify(content);
    localStorage.setItem('message', jsonContent);
    console.log(jsonContent);
})

load.addEventListener('click', (e) => {

    e.preventDefault();

    const stringifyContent = localStorage.getItem('message');

    content = JSON.parse(stringifyContent);
    console.log(content);
    message.value = content.text;


    setContent();

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