console.log('wip');

let newLink = document.createElement('a');
let allParagraphs = document.getElementsByTagName('p');
// allParagraphs is 'list' of every p tag on page
const firstParagraph = allParagraphs[0];

//firstParagraph gets first item. in JS first item is positioned at 0
console.log('allParagraphs');

newLink.setAttribute('href', 'https//:google.com');

newLink.style.display = 'inner-block';

newLink.innerHTML = 'take me to google';

firstParagraph.appendChild(newLink);
