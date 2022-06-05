const aboutMecards = [
  {
    image: './image/language.svg',
    title: 'Language',
    items: ['Javascript', 'Ruby', 'Html', 'Css'],
  },
  {
    image: './image/framework.svg',
    title: 'Framework',
    items: ['Bootstrap', 'Capybara', 'Selenium', 'Ruby', 'RSpec'],
  },
  {
    image: './image/skill.svg',
    title: 'Skills',
    items: ['Codekit', 'Github', 'Codepen', 'Gitlab', 'Terminal'],
  },
];

function createAboutMecardElement(data) {
  this.image = data.image;
  this.title = data.title;
  this.items = data.items;
  this.createElement = function createElement() {
    const generalLiElements = (textContents) =>
      textContents
        .map((textContent) => `<li class="attribute-tags contrast">${textContent}</li>`)
        .join('');
    const languageLiElements = generalLiElements(this.items);
    const div = document.createElement('div');
    div.innerHTML = ` <ul class="flex-container">
    <li class="flex-box">
    <p class="attribute-ellip">
      <img class="attribute-img" src="${this.image}" alt="skill" />
    </p>
    <h3 class="attribute-title">${this.title}</h3>
    <ul class="attri-content">${languageLiElements}</ul>
  </li> 
  </ul>`;
    return div;
  };
}

const div = document.querySelector('.flex-container');

function attachToDom(detail) {
  const portfolioCard = new createAboutMecardElement(detail);
  const portfolio = portfolioCard.createElement();
  div.appendChild(portfolio);
}

aboutMecards.forEach(attachToDom);

//navabar
const menu = document.querySelector('.navbar-container');
const menuLinks = document.querySelector('.nav-link');
// Display mobile menu
const navbarContainer = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', navbarContainer);
menuLinks.addEventListener('click', navbarContainer);
