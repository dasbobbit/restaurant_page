const loadPage = (() => {

    const contentContainer = document.getElementById("content");
    
    const header = document.createElement('header');
    header.id= 'header';
    const footer = document.createElement('footer');
    const main = document.createElement('main');
    main.id = 'main';
    contentContainer.appendChild(main);

    const navBarItems = ["home", "menu", "contact"];
    const ul = document.createElement('ul');
    ul.className = 'nav-bar';
    console.log('here');
    navBarItems.forEach((element) => {
        let input = document.createElement('input')
        input.type = 'radio';
        input.name = 'tabs'
        input.id = 'tab-' + element;
        let label = document.createElement('label');
        label.htmlFor = `${input.id}`;
        label.textContent = element;

        header.appendChild(input);
        header.appendChild(label);
    });

    // header.appendChild(ul);
    contentContainer.appendChild(header);
    contentContainer.appendChild(main);
    contentContainer.appendChild(footer);

})();

export { loadPage }