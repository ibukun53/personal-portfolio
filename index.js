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
    const liElement = document.createElement('li');
    liElement.classList.add('flex-box');
    liElement.innerHTML = `<article><p class="attribute-ellip">
      <img class="attribute-img" src="${this.image}" alt="skill" /> 
    </p>
    <h3 class="attribute-title">${this.title}</h3>
    <ul class="attri-content">${languageLiElements}</ul></article>`;
    return liElement;
  };
}

const aboutMecardWrapperElement = document.querySelector('.flex-container');

function attachAboutMeDom(detail) {
  const portfolioCard = new createAboutMecardElement(detail);
  const portfolio = portfolioCard.createElement();
  aboutMecardWrapperElement.appendChild(portfolio);
}

aboutMecards.forEach(attachAboutMeDom);

const recentWorkCards = [
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
  },
];

function createRecentWorkElement(data) {
  this.image = data.image;
  this.title = data.title;
  this.items = data.items;
  this.createElement = function createElement() {
    const generalLiElements = (textContents) =>
      textContents
        .map((textContent) => `<li class="content-tags contrast">${textContent}</li>`)
        .join('');
    const languageLiElements = generalLiElements(this.items);
    const listOfRecentWorkElement = document.createElement('li');
    listOfRecentWorkElement.classList.add('grid-item');
    listOfRecentWorkElement.innerHTML = `<div class="card">
        <img class="card-img" src="${this.image}" alt="page" />
        <h3 class="card-header">${this.title}</h3>
        <ul class="card-content margin-left-right-auto">${languageLiElements}</ul>
        <div class="content-btn">
          <a href="" aria-label="button">
            <button-style class="see-projects">See Project </button-style>
          </a>
        </div>
      </div>`;
    return listOfRecentWorkElement;
  };
}

const recentWorkWrapperElement = document.querySelector('.works');
function attachRecentWorkDom(detail) {
  const portfolioCard = new createRecentWorkElement(detail);
  const portfolio = portfolioCard.createElement();
  recentWorkWrapperElement.appendChild(portfolio);
}

recentWorkCards.forEach(attachRecentWorkDom);

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
