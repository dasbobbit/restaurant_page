console.log('made it here too');

const main = document.getElementById('main');
const contentContainer = document.querySelector('#content');
const content = document.createElement('div');

const img = document.createElement('img');

img.src = '../dist/images/restaurant_outside.jpg';

const title = document.createElement('h1');
title.textContent = 'Spiffing Steak House';

const description = document.createElement('p');
description.textContent = 'The Spiffing Restaurant is a sight to behold, pay as little at $80 per course for an experience of a lifetime.';

const renderHomePage = () => {
    main.appendChild(img);
    main.appendChild(title);
    main.appendChild(description);
};

export { renderHomePage };