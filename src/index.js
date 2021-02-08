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

const tabClick = document.addEventListener('click', (e) => {
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
// closeCurrentPage();
renderHomePage();