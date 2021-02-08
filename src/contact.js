const main = document.getElementById('main');

const contentContainer = document.querySelector('#content');
const content = document.createElement('div');

const img = document.createElement('img');

const title = document.createElement('h1');
title.textContent = 'You can contact us here';

const description = document.createElement('p');
description.textContent = 'Head on over to our social media pages to get up-to-date news on Spiffing Steakhouse, get the insider gossip on when the next STEAK GIVEAWAY IS!';

// add social media buttons
const socialDiv = document.createElement('div');
socialDiv.id = 'social-div';
let socialList = ['facebook', 'twitter', 'instagram', 'google'];
socialList.forEach(element => {
    let socialButton = document.createElement('a');
    // socialButton.href = '#';
    socialButton.className = `fa fa-${element}`;
    socialDiv.appendChild(socialButton);
});

const renderContactPage = () => {
    main.appendChild(img);
    main.appendChild(title);
    main.appendChild(description);
    main.appendChild(socialDiv);
};

export { renderContactPage }