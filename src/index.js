import { loadHomePage } from "./homePage";
import { loadMenuPage } from "./menuPage";
import { loadContactPage } from "./contactPage";

loadHomePage();

const body = document.querySelector('body');
const content = document.querySelector('#content');


function loadMenu() {
    body.removeChild(body.lastElementChild);
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    loadMenuPage();
    setEventListeners();
};

function loadHome() {
    body.removeChild(body.lastElementChild);
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    loadHomePage();
    setEventListeners();
};

function loadContact(){
    body.removeChild(body.lastElementChild);
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    loadContactPage();
    setEventListeners();
}


function setEventListeners() {
    const homeButton = document.querySelector('.homeButton');
    homeButton.addEventListener('click', loadHome);

    const menuButtonHeader = document.querySelector('.menuButtonHeader');
    menuButtonHeader.addEventListener('click', loadMenu);

    const menuButton = document.querySelector('#menu');
    if (menuButton !== null) {
        menuButton.addEventListener('click', loadMenu);
    }

    const contactButton = document.querySelector('.contactButton');
    contactButton.addEventListener('click', loadContact)
}

setEventListeners();