function createContent() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.setAttribute('id','header');

    const home = document.createElement('div');
    home.textContent = 'Home';
    home.classList.add('homeButton');
    home.setAttribute('id', 'current');
    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.classList.add('menuButtonHeader');
    const contact = document.createElement('div');
    contact.textContent = 'Contact';
    contact.classList.add('contactButton');

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);


    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const name = document.createElement('div');
    name.setAttribute('id', 'name');
    name.textContent = 'Coastal Tastes';

    const container = document.createElement('div');
    const slogan = document.createElement('div');
    slogan.setAttribute('id', 'slogan');
    slogan.textContent = 'We Bring Seafood To Life!';
    const mainText = document.createElement('div');
    mainText.setAttribute('id', 'text');
    mainText.textContent = 'Experience the best of fresh and delicious seafood at Coastal ' 
                         + 'Tastes. Our menu offers a wide variety of mouthwatering seafood '
                         + 'dishes that will satisfy your cravings. Visit us today and indulge '
                         + 'in a delightful dining experience.'

    container.appendChild(slogan);
    container.appendChild(mainText);

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menu');
    menuBtn.textContent = 'View Menu';

    main.appendChild(name);
    main.appendChild(container);
    main.appendChild(menuBtn);

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    const facebook = document.createElement('img');
    facebook.setAttribute('src', '../src/img/facebook.svg');
    facebook.setAttribute('id', 'svg');
    const instagram = document.createElement('img');
    instagram.setAttribute('src', '../src/img/instagram.svg');
    instagram.setAttribute('id', 'svg');
    const twitter = document.createElement('img');
    twitter.setAttribute('src', '../src/img/twitter.svg');
    twitter.setAttribute('id', 'svg');

    footer.appendChild(facebook);
    footer.appendChild(instagram);
    footer.appendChild(twitter);


    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
}

function createBackground() {
    const body = document.querySelector('body');

    const background = document.createElement('div');
    background.setAttribute('id', 'background');

    const cite = document.createElement('div');
    cite.setAttribute('id', 'cite');

    const spanOne = document.createElement('span');
    spanOne.textContent = 'Photo by '
    
    const citeLink = document.createElement('a');
    citeLink.setAttribute('href', 'https://unsplash.com/@pimmyten');
    citeLink.textContent = 'Pim Myten ';

    const spanTwo = document.createElement('span');
    spanTwo.textContent = 'on ';

    const photoLink = document.createElement('a');
    photoLink.setAttribute('href', 'https://unsplash.com/photos/HXScJqhiSJY');
    photoLink.textContent = 'Unsplash.';

    cite.appendChild(spanOne);
    cite.appendChild(citeLink);
    cite.appendChild(spanTwo);
    cite.appendChild(photoLink);
    background.appendChild(cite);
    body.appendChild(background);
}

function loadHomePage() {
    createContent();
    createBackground();
}

export { loadHomePage };