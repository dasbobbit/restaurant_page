const main = document.getElementById('main');

const contentContainer = document.querySelector('#content');
const content = document.createElement('div');

const img = document.createElement('img');

const title = document.createElement('h1');
title.textContent = 'You can contact us here';

const description = document.createElement('p');
description.textContent = 'The Spiffing Restaurant is a sight to behold, pay as little at $80 per course for an experience of a lifetime.';

const renderContactPage = () => {
    main.appendChild(img);
    main.appendChild(title);
    main.appendChild(description);
};

export { renderContactPage }