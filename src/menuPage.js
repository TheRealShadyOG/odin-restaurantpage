function createContent() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.setAttribute('id','header');

    const home = document.createElement('div');
    home.textContent = 'Home';
    home.classList.add('homeButton');
    const menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.classList.add('menuButtonHeader');
    menu.setAttribute('id', 'current');
    const contact = document.createElement('div');
    contact.textContent = 'Contact';
    contact.classList.add('contactButton');

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);


    const menuBody = document.createElement('div');
    menuBody.setAttribute('id', 'menuBody');

    const menuHeader = document.createElement('div');
    menuHeader.setAttribute('id', 'menuHeader');
    menuHeader.textContent = 'Menu';

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menuContent');

    const appetizers = document.createElement('div');
    appetizers.setAttribute('id', 'menuCategories');
    appetizers.textContent = 'Appetizers';

    const appetizersGroup = document.createElement('div');
    appetizersGroup.setAttribute('id', 'itemGroup');

    const appetizerOne = document.createElement('div');
    appetizerOne.setAttribute('id', 'menuItem');
    const seafoodCakes = document.createElement('div');
    seafoodCakes.textContent = 'Seafood Cakes with Herb Sauce';
    const seafoodCakesPrice = document.createElement('div');
    seafoodCakesPrice.textContent = '16';
    
    appetizerOne.appendChild(seafoodCakes);
    appetizerOne.appendChild(seafoodCakesPrice);

    const appetizerTwo = document.createElement('div');
    appetizerTwo.setAttribute('id', 'menuItem');
    const salmonDip = document.createElement('div');
    salmonDip.textContent = 'Salmon Dip with Cream Cheese';
    const salmonDipPrice = document.createElement('div');
    salmonDipPrice.textContent = '13';

    appetizerTwo.appendChild(salmonDip);
    appetizerTwo.appendChild(salmonDipPrice);

    const appetizerThree = document.createElement('div');
    appetizerThree.setAttribute('id', 'menuItem');
    const shrimpKabobs = document.createElement('div');
    shrimpKabobs.textContent = 'Barbecuded Shrimp & Peach Kabobs';
    const shrimpKabobsPrice = document.createElement('div');
    shrimpKabobsPrice.textContent = '14';

    appetizerThree.appendChild(shrimpKabobs);
    appetizerThree.appendChild(shrimpKabobsPrice);

    appetizersGroup.appendChild(appetizerOne);
    appetizersGroup.appendChild(appetizerTwo);
    appetizersGroup.appendChild(appetizerThree);


    const mainCourses = document.createElement('div');
    mainCourses.setAttribute('id', 'menuCategories');
    mainCourses.textContent = 'Main Courses';

    const mainCoursesGroup = document.createElement('div');
    mainCoursesGroup.setAttribute('id', 'itemGroup');

    const mainCourseOne = document.createElement('div');
    mainCourseOne.setAttribute('id', 'menuItem');
    const faroeSalmon = document.createElement('div');
    faroeSalmon.textContent = 'Faroe Island Salmon';
    const faroeSalmonPrice = document.createElement('div');
    faroeSalmonPrice.textContent = '26';

    mainCourseOne.appendChild(faroeSalmon);
    mainCourseOne.appendChild(faroeSalmonPrice);

    const mainCourseTwo = document.createElement('div');
    mainCourseTwo.setAttribute('id', 'menuItem');
    const rainbowTrout = document.createElement('div');
    rainbowTrout.textContent = 'Rainbow Trout';
    const rainbowTroutPrice = document.createElement('div');
    rainbowTroutPrice.textContent = '21';

    mainCourseTwo.appendChild(rainbowTrout);
    mainCourseTwo.appendChild(rainbowTroutPrice);

    const mainCourseThree = document.createElement('div');
    mainCourseThree.setAttribute('id', 'menuItem');
    const mahi = document.createElement('div');
    mahi.textContent = 'Mahi Mahi';
    const mahiPrice = document.createElement('div');
    mahiPrice.textContent = '22';

    mainCourseThree.appendChild(mahi);
    mainCourseThree.appendChild(mahiPrice);

    const mainCourseFour = document.createElement('div');
    mainCourseFour.setAttribute('id', 'menuItem');
    const ahiTuna = document.createElement('div');
    ahiTuna.textContent = 'Hawaiian Ahi Tuna';
    const ahiTunaPrice = document.createElement('div');
    ahiTunaPrice.textContent = '35';

    mainCourseFour.appendChild(ahiTuna);
    mainCourseFour.appendChild(ahiTunaPrice);

    const mainCourseFive = document.createElement('div');
    mainCourseFive.setAttribute('id', 'menuItem');
    const lobsterTails = document.createElement('div');
    lobsterTails.textContent = 'Cold Water Lobster Tails';
    const lobsterTailsPrice = document.createElement('div');
    lobsterTailsPrice.textContent = '40';

    mainCourseFive.appendChild(lobsterTails);
    mainCourseFive.appendChild(lobsterTailsPrice);

    const mainCourseSix = document.createElement('div');
    mainCourseSix.setAttribute('id', 'menuItem');
    const shrimpAlfredo = document.createElement('div');
    shrimpAlfredo.textContent = 'Shrimp Alfredo';
    const shrimpAlfredoPrice = document.createElement('div');
    shrimpAlfredoPrice.textContent = '18';

    mainCourseSix.appendChild(shrimpAlfredo);
    mainCourseSix.appendChild(shrimpAlfredoPrice);

    mainCoursesGroup.appendChild(mainCourseOne);
    mainCoursesGroup.appendChild(mainCourseTwo);
    mainCoursesGroup.appendChild(mainCourseThree);
    mainCoursesGroup.appendChild(mainCourseFour);
    mainCoursesGroup.appendChild(mainCourseFive);
    mainCoursesGroup.appendChild(mainCourseSix);


    const sides = document.createElement('div'); 
    sides.setAttribute('id', 'menuCategories');
    sides.textContent = 'Sides';

    const sidesGroup = document.createElement('div');
    sidesGroup.setAttribute('id', 'itemGroup');

    const sidesOne = document.createElement('div');
    sidesOne.setAttribute('id', 'menuItem');
    const bakedPotato = document.createElement('div');
    bakedPotato.textContent = 'Creamy Lobster Baked Potato';
    const bakedPotatoPrice = document.createElement('div');
    bakedPotatoPrice.textContent = '8';

    sidesOne.appendChild(bakedPotato);
    sidesOne.appendChild(bakedPotatoPrice);

    const sidesTwo = document.createElement('div');
    sidesTwo.setAttribute('id', 'menuItem');
    const brusselsSprouts = document.createElement('div');
    brusselsSprouts.textContent = 'Honey Truffle Brussels Sprouts';
    const brusselsSproutsPrice = document.createElement('div');
    brusselsSproutsPrice.textContent = '7';

    sidesTwo.appendChild(brusselsSprouts);
    sidesTwo.appendChild(brusselsSproutsPrice);

    const sidesThree = document.createElement('div');
    sidesThree.setAttribute('id', 'menuItem');
    const salad = document.createElement('div');
    salad.textContent = 'Caesar Salad';
    const saladPrice = document.createElement('div');
    saladPrice.textContent = '6';

    sidesThree.appendChild(salad);
    sidesThree.appendChild(saladPrice);

    sidesGroup.appendChild(sidesOne);
    sidesGroup.appendChild(sidesTwo);
    sidesGroup.appendChild(sidesThree);


    const desserts = document.createElement('div');
    desserts.setAttribute('id', 'menuCategories');
    desserts.textContent = 'Desserts';

    const dessertsGroup = document.createElement('div');
    dessertsGroup.setAttribute('id', 'itemGroup');

    const dessertOne = document.createElement('div');
    dessertOne.setAttribute('id', 'menuItem');
    const pudding = document.createElement('div');
    pudding.textContent = 'Grilled Blackberry Brioche Bread Pudding';
    const puddingPrice = document.createElement('div');
    puddingPrice.textContent = '13';

    dessertOne.appendChild(pudding);
    dessertOne.appendChild(puddingPrice);

    const dessertTwo = document.createElement('div');
    dessertTwo.setAttribute('id', 'menuItem');
    const cake = document.createElement('div');
    cake.textContent = 'Chocolate Eclair Cake';
    const cakePrice = document.createElement('div');
    cakePrice.textContent = '10';

    dessertTwo.appendChild(cake);
    dessertTwo.appendChild(cakePrice);

    const dessertThree = document.createElement('div');
    dessertThree.setAttribute('id', 'menuItem');
    const cheesecake = document.createElement('div');
    cheesecake.textContent = 'Vanilla Chai Cheesecake';
    const cheesecakePrice = document.createElement('div');
    cheesecakePrice.textContent = '12';

    dessertThree.appendChild(cheesecake);
    dessertThree.appendChild(cheesecakePrice);

    dessertsGroup.appendChild(dessertOne);
    dessertsGroup.appendChild(dessertTwo);
    dessertsGroup.appendChild(dessertThree);


    menuContent.appendChild(appetizers);
    menuContent.appendChild(appetizersGroup);
    menuContent.appendChild(mainCourses);
    menuContent.appendChild(mainCoursesGroup);
    menuContent.appendChild(sides);
    menuContent.appendChild(sidesGroup);
    menuContent.appendChild(desserts);
    menuContent.appendChild(dessertsGroup);

    menuBody.appendChild(menuHeader);
    menuBody.appendChild(menuContent);


    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    const facebook = document.createElement('img');
    facebook.setAttribute('src', './resources/img/facebook.svg');
    facebook.setAttribute('id', 'svg');
    const instagram = document.createElement('img');
    instagram.setAttribute('src', './resources/img/instagram.svg');
    instagram.setAttribute('id', 'svg');
    const twitter = document.createElement('img');
    twitter.setAttribute('src', './resources/img/twitter.svg');
    twitter.setAttribute('id', 'svg');

    footer.appendChild(facebook);
    footer.appendChild(instagram);
    footer.appendChild(twitter);


    content.appendChild(header);
    content.appendChild(menuBody);
    content.appendChild(footer);
}

function createBackground() {
    const body = document.querySelector('body');

    const background = document.createElement('div');
    background.setAttribute('id', 'menuBackground');

    const cite = document.createElement('div');
    cite.setAttribute('id', 'cite');

    const spanOne = document.createElement('span');
    spanOne.textContent = 'Photo by '
    
    const citeLink = document.createElement('a');
    citeLink.setAttribute('href', 'https://unsplash.com/@maxburger');
    citeLink.textContent = 'Max Burger ';

    const spanTwo = document.createElement('span');
    spanTwo.textContent = 'on ';

    const photoLink = document.createElement('a');
    photoLink.setAttribute('href', 'https://unsplash.com/photos/PvyjOd6PSUo');
    photoLink.textContent = 'Unsplash.';

    cite.appendChild(spanOne);
    cite.appendChild(citeLink);
    cite.appendChild(spanTwo);
    cite.appendChild(photoLink);
    background.appendChild(cite);
    body.appendChild(background);
}

function loadMenuPage() {
    createContent();
    createBackground();
}


export { loadMenuPage };