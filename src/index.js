import { loadPage } from './pageload';
import { renderHomePage } from './home';
import { renderMenuPage } from './menu';
import { renderContactPage } from './contact';

const contentContainer = document.getElementById("content");
const main = document.getElementById('main');

const closeCurrentPage = () => {
    while (main.lastElementChild) {
        main.removeChild(main.lastElementChild);
    }
};

let component = (page) => {
    const element = document.createElement('div');
    element.innerHTML = renderHomePage();
    console.log(element);

    return element;
}

const tabClick = document.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent == 'home') {
        closeCurrentPage();
        renderHomePage();

    }
    if (e.target.textContent == 'menu') {
        closeCurrentPage();
        renderMenuPage();
    } 
    if (e.target.textContent == 'contact') {
        closeCurrentPage();
        renderContactPage();
    }
});
renderHomePage();