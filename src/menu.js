const main = document.getElementById('main');

const img = document.createElement('img');

const sections = document.createElement('div');
sections.className = 'sections';



class Dish {
    constructor(title, price, section, description = "") {
        this.title = title;
        this.price = price;
        this.section = section
        this.description = description;
    }
}
const sectionNames = ["starters", "mains", "steak", "sides", "desserts"];
let dishList = [];

// Populate the dishList
// dishList.push(new Dish("", "", "", ""));
// dishList.push(new Dish("", "", "", ""));
dishList.push(new Dish("Bone marrow and onions", "8", "starters", ""));
dishList.push(new Dish("Spiffing smoked salmon", "12", "starters", ""));
dishList.push(new Dish("Smoked mackerel salad", "10", "starters", ""));
dishList.push(new Dish("Spiffing Burger", "12", "mains", "served with chips or salad"));
dishList.push(new Dish("Poached Scallop with mashed potatoes", "14", "mains"));
dishList.push(new Dish("Slow-cooked pork ribs", "16", "mains"));
dishList.push(new Dish("Chilled lobster meat roll", "14", "mains"));
dishList.push(new Dish("Sirloin (400g)", "26", "steak", ""));
dishList.push(new Dish("Rib-Eye (350g)", "24", "steak", ""));
dishList.push(new Dish("Rump (300g)", "18", "steak", ""));
dishList.push(new Dish("Fillet (350g)", "32", "steak", ""));
dishList.push(new Dish("Mash", "6", "sides", ""));
dishList.push(new Dish("Creamy spinach", "7", "sides", ""));
dishList.push(new Dish("Curly fries", "5", "sides", ""));
dishList.push(new Dish("Chunky thick-cut chips", "5", "sides", ""));
dishList.push(new Dish("Macaroni cheese", "6", "sides", ""));
dishList.push(new Dish("Sticky toffee pudding", "9", "desserts", ""));
dishList.push(new Dish("Millionaire shortbread", "9", "desserts", ""));
dishList.push(new Dish("Spiffing cheesecake", "9", "desserts", ""));
console.log(dishList);

const title = document.createElement('h1');
title.textContent = 'I am the menu';

const description = document.createElement('p');
description.textContent = 'The Spiffing Restaurant is a sight to behold, pay as little at $80 per course for an experience of a lifetime.';

const renderMenu = () => {
    sectionNames.forEach((sectionName) => {
        let section = document.createElement('div');
        section.className = 'section';
        let sectionTitle = document.createElement('h2');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = `${sectionName}`;
        section.appendChild(sectionTitle);

        dishList.forEach((item) => {
            if (item.section === sectionName) {
                let menuDish = document.createElement('div');

                let menuItemTitle = document.createElement('span');
                menuItemTitle.className = 'menu-item-title';
                let menuItemPrice = document.createElement('span');
                menuItemPrice.className = 'menu-item-price';

                menuDish.className = 'dish';
                menuItemTitle.textContent = `${item.title}`;
                menuItemPrice.textContent = `${item.price}`;
                menuDish.appendChild(menuItemTitle);
                menuDish.appendChild(menuItemPrice);
                section.appendChild(menuDish);
            }
        });
        sections.appendChild(section);
    });
};
renderMenu();
const renderMenuPage = () => {
    main.appendChild(sections);
    // main.appendChild(img);
    // main.appendChild(title);
    // main.appendChild(description);
};

export { renderMenuPage }