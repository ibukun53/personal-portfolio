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
      textContents
        .map((textContent) => `<li class="attribute-tags contrast">${textContent}</li>`)
        .join('');
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
    image: './image/card1.png',
    title: 'Sporting ultimate website',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4aa',
    description:
      'Ultimate sport website takes  all about there special sporting activities',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card2.png',
    title: 'Product-Landing Portfolio',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '2cc',
    description:
      'Product landing is a simple and unique website to brand an existing product ',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://web.facebook.com/debby.blessing.1460',
  },
  {
    image: './image/card3.png',
    title: 'Simple Nourish Website',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4bb',
    description:
      ' This ia a website that opens our eye to the food types in our location',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card4.png',
    title: 'Product-Landing Portfolio',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '8hh',
    description:
      'A product landing portfolio emphasics basically on  a brand project ',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card5.png',
    title: 'Parasite-Documentation Portfolio',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '7ff',
    description:
      'A parasite documentation portfolio emphasics basically on insect,pest studies ',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card6.png',
    title: 'Technical-Documentation Portfolio',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '10aa',
    description:
      ' A technical portfolio website is certain to show documented of educational and tecnical topics. ',
    github: 'https://github.com/ibukun53',
    liveDemo: 'file:///C:/projects/techincal-documentation-page/index.html',
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
        <button type="button" class="seeprojects" id="${this.id}">See Project</button>
        </div> `;
    return listOfRecentWorksElements;
  };
}

const recentWorkWrapperElement = document.querySelector('.works');
function attachRecentWorkDom(detail) {
  const portfolioCard = new createRecentWorkElements(detail);
  const portfolio = portfolioCard.createElement();
  recentWorkWrapperElement.appendChild(portfolio);
}
recentWorkCards.forEach(attachRecentWorkDom);

//btn
const btns = document.querySelectorAll('.seeprojects');
btns.forEach((btn) => {
  btn.addEventListener('click', function (event) {
    console.log(event.target.id);
    function obj(card) {
      return card.id === event.target.id;
    }
    const currentWork = recentWorkCards.find(obj);
    const popUp = document.querySelector('.modal-container');
    const popUpDescription = popUp.querySelector('.modal-summary').textContent = currentWork.description;
    const popUpTitle = popUp.querySelector('.modal-project-title').textContent = currentWork.title;
    const popUpImage = popUp.querySelector('.modal-desktop-image').src = currentWork.image;
    const popUpItems = popUp.querySelector('.modal-desktop-tags').textContent = currentWork.items;
    const popBtn = popUp.querySelector('.modal-See-Live').href = currentWork.liveDemo;
    const popbtn = popUp.querySelector('.modal-See-Source').href = currentWork.github;
    return popUp.classList.remove('hidden');
  });
});
//*

const cancelBtn = document.querySelector('.modal-cancel-container');
const modalCancel = () => {
  const modalContainer = document.querySelector('.modal-container');
   modalContainer.classList.add('hidden');
};
cancelBtn.addEventListener('click', modalCancel);

//navbar
const menu = document.querySelector('.navbar-container');
const menuLinks = document.querySelector('.nav-menu');
// Display mobile menu
const navbarContainer = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', navbarContainer);
menuLinks.addEventListener('click', navbarContainer);
