const loadPage = (() => {

    const contentContainer = document.getElementById("content");
    
    const header = document.createElement('header');
    const footer = document.createElement('footer');
    const main = document.createElement('main');
    main.id = 'main';
    contentContainer.appendChild(main);

    const navBarItems = ["home", "menu", "contact"];
    const ul = document.createElement('ul');
    ul.className = 'nav-bar';

    navBarItems.forEach((element) => {
        let li = document.createElement('li');
        li.textContent = element;
        li.className = 'nav-button';
        ul.appendChild(li);
    });

    const nav = document.createElement('nav');
    nav.appendChild(ul);
    header.appendChild(nav);
    contentContainer.appendChild(header);
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);


})();

export { loadPage }