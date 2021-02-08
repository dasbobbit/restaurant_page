console.log('made it here too');

const main = document.getElementById('main');
const contentContainer = document.querySelector('#content');
const content = document.createElement('div');

const img = document.createElement('img');

img.src = '../dist/images/restaurant_outside.jpg';

const title = document.createElement('h1');
title.textContent = 'Spiffing Steakhouse';

const description = document.createElement('p');
description.textContent = 'The Spiffing Steakhouse, being situated on the corner of the river Thames and the mediterranean Sea, is an absolute must when vising the City. Whether you decide on one of our world class Aussie beef steaks, our seafood, or our hamburgers, you\'ll undoubtedly be raving about it to all your friends and family until they dissown you!';

const renderHomePage = () => {
    main.appendChild(img);
    // main.appendChild(title);
    main.appendChild(description);
};

export { renderHomePage };