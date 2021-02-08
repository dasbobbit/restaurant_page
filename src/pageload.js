const loadPage = (() => {

    const contentContainer = document.getElementById("content");
    
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    header.id= 'header';
    footer.id = 'footer';
    main.id = 'main';

    const navBarItems = ["home", "menu", "contact"];
    const ul = document.createElement('ul');
    ul.className = 'nav-bar';

    const navBarButtons = document.createElement('div');
    navBarButtons.id = 'nav-bar-buttons';

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Spiffing Steakhouse';
    restaurantName.id = 'restaurant-name';
    header.appendChild(restaurantName);

    navBarItems.forEach((element) => {
        let input = document.createElement('input')
        let label = document.createElement('label');
        input.type = 'radio';
        input.name = 'tabs'
        input.id = 'tab-' + element;
        label.htmlFor = `${input.id}`;
        label.textContent = element;

        navBarButtons.appendChild(input);
        navBarButtons.appendChild(label);
    });
    header.appendChild(navBarButtons);
    contentContainer.appendChild(header);
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);

})();

export { loadPage }