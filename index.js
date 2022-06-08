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

function createAboutMecardElements(data) {
  this.image = data.image;
  this.title = data.title;
  this.items = data.items;
  this.createElement = function createElement() {
    const generalLiElements = (textContents) =>
      textContents.map((textContent) => `<li class="attribute-tags contrast">${textContent}</li>`).join('');
    const languageLiElements = generalLiElements(this.items);
    const liElements = document.createElement('li');
    liElements.classList.add('flex-box');
    liElements.innerHTML = `<article><p class="attribute-ellip">
      <img class="attribute-img" src="${this.image}" alt="skill" /> 
    </p>
    <h3 class="attribute-title">${this.title}</h3>
    <ul class="attri-content">${languageLiElements}</ul></article>`;
    return liElements;
  };
}

const aboutMecardWrapperElement = document.querySelector('.flex-container');
function attachAboutMeDom(detail) {
  const portfolioCard = new createAboutMecardElements(detail);
  const portfolio = portfolioCard.createElement();
  aboutMecardWrapperElement.appendChild(portfolio);
}
aboutMecards.forEach(attachAboutMeDom);


const recentWorkCards = [
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4aa',
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id:  '2cc' ,
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4bb',
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '8hh',
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id:  '7ff',
  },
  {
    image: './image/Screenshot.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '10aa',
  },
];

function createRecentWorkElements(data) {
  this.image = data.image;
  this.title = data.title;
  this.items = data.items;
  this.id = data.id;
  this.createElement = function createElement() {
    const generalLiElements = (textContents) =>
      textContents
        .map((textContent) => `<li class="content-tags contrast">${textContent}</li>`)
        .join('');
    const languageLiElements = generalLiElements(this.items);
    const listOfRecentWorksElements = document.createElement('li');
    listOfRecentWorksElements.classList.add('grid-item');
    listOfRecentWorksElements.innerHTML = `<div class="card">
        <img class="card-img" src="${this.image}" alt="page" />
        <h3 class="card-header">${this.title}</h3>
        <ul class="card-content margin-left-right-auto">${languageLiElements}</ul>
        <div class="content-btn">
          <a href="" aria-label="button">
            <button-style class="see-projects" ${this.id}>See Project </button-style>
          </a>
        </div>
        </div>`;
    return listOfRecentWorksElements;
  };
  console.log(`${this.id}`);
}

const recentWorkWrapperElement = document.querySelector('.works');
function attachRecentWorkDom(detail) {
  const portfolioCard = new createRecentWorkElements(detail);
  const portfolio = portfolioCard.createElement();
  recentWorkWrapperElement.appendChild(portfolio);
};
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
