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
    const contact = document.createElement('div');
    contact.textContent = 'Contact';
    contact.classList.add('contactButton');
    contact.setAttribute('id', 'current');

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);


    const contactBody = document.createElement('div');
    contactBody.setAttribute('id', 'contactBody');

    const contactHeader = document.createElement('div');
    contactHeader.setAttribute('id', 'contactHeader');
    contactHeader.textContent = 'Contact Us!';


    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contactInfo');

    const phoneNum = document.createElement('div');
    phoneNum.textContent = '802-591-0588';
    const email = document.createElement('div');
    email.textContent = 'coastaltastes@fakemail.com';
    const address = document.createElement('div');
    address.textContent = '701 Trimble Rd, Wahiawa, Hawaii';

    contactInfo.appendChild(phoneNum);
    contactInfo.appendChild(email);
    contactInfo.appendChild(address);


    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');

    const hoursTitle= document.createElement('div');
    hoursTitle.textContent = 'Hours';
    const monday = document.createElement('div');
    monday.textContent = 'Monday 4pm - 10pm';
    const tuesday = document.createElement('div');
    tuesday.textContent = 'Tuesday 4pm - 10pm';
    const wednesday = document.createElement('div');
    wednesday.textContent = 'Wednesday 4pm - 10pm';
    const thursday = document.createElement('div');
    thursday.textContent = 'Thursday 4pm - 10pm';
    const friday = document.createElement('div');
    friday.textContent = 'Friday 4pm - 10pm';
    const saturday = document.createElement('div');
    saturday.textContent = 'Saturday 11am - 10pm';
    const sunday = document.createElement('div');
    sunday.textContent = 'Sunday 11am - 10pm';

    hours.appendChild(hoursTitle);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);
    hours.appendChild(thursday);
    hours.appendChild(friday);
    hours.appendChild(saturday);
    hours.appendChild(sunday);


    contactBody.appendChild(contactHeader);
    contactBody.appendChild(contactInfo);
    contactBody.appendChild(hours);


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
    content.appendChild(contactBody);
    content.appendChild(footer);
}

function createBackground() {
    const body = document.querySelector('body');

    const background = document.createElement('div');
    background.setAttribute('id', 'contactBackground');

    const cite = document.createElement('div');
    cite.setAttribute('id', 'cite');

    const spanOne = document.createElement('span');
    spanOne.textContent = 'Photo by '
    
    const citeLink = document.createElement('a');
    citeLink.setAttribute('href', 'https://unsplash.com/@anniespratt');
    citeLink.textContent = 'Annie Spratt ';

    const spanTwo = document.createElement('span');
    spanTwo.textContent = 'on ';

    const photoLink = document.createElement('a');
    photoLink.setAttribute('href', 'https://unsplash.com/photos/Uk3t05ndSng');
    photoLink.textContent = 'Unsplash.';

    cite.appendChild(spanOne);
    cite.appendChild(citeLink);
    cite.appendChild(spanTwo);
    cite.appendChild(photoLink);
    background.appendChild(cite);
    body.appendChild(background);
}

function loadContactPage() {
    createContent();
    createBackground();
}

export { loadContactPage };