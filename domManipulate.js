function createContent() {

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