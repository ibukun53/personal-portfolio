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
    liElements.classList.add('about-box');
    liElements.innerHTML = `<article><p class="attribute-ellip">
      <img class="attribute-img" src="${this.image}" alt="skill" /> 
    </p>
    <h3 class="attribute-title">${this.title}</h3>
    <ul class="attri-content">${languageLiElements}</ul></article>`;
    return liElements;
  };
}

const aboutMecardWrapperElement = document.querySelector('.about-container');
function attachAboutMeDom(detail) {
  const portfolioCard = new createAboutMecardElements(detail);
  const portfolio = portfolioCard.createElement();
  aboutMecardWrapperElement.appendChild(portfolio);
}
aboutMecards.forEach(attachAboutMeDom);

const recentWorkCards = [
  {
    image: './image/card1.png',
    title: 'Sporting Ultimate Website',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4aa',
    description:
      'Ultimate sport website accomplish a number of things.The update of upcoming events in all activities on the latest news.The web page is easy to navigate and are esay to digestion of information with the multimedia section are solidand flexible.',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
    next: 5,
    previous: 5,
  },
  {
    image: './image/card2.png',
    title: 'Product-Landing Page',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '2cc',
    description:
      'Product landing page is a webpage designed specifically to promote or sell products or persuade visitors to convert to a product -related offer.',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://codepen.io/debbyblessing/full/ZEBpENL',
    next: 4,
    previous: 4,
  },
  {
    image: './image/card3.png',
    title: 'Simple Nourish Website',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4bb',
    description:
      ' Simple Norish website ia a web that describes a healthy food products.They offer a variety of Food product, the site easy to navigate.The overall design is modern and stylish opens our eye to the food types in our location',
    github: 'https://github.com/ibukun53/simple-nourish-website',
    liveDemo: 'https://simple-nourish.netlify.app/',
    next: 3,
    previous: 3,
  },
  {
    image: './image/card4.png',
    title: 'Web Questionaire Form ',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '8hh',
    description:
      'Questionaire form  webs allows collecting instant feedback, evaluation and suggestions from users about your products and services',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://codepen.io/debbyblessing/full/GRNqLER',
    next: 2,
    previous: 2,
  },
  {
    image: './image/card5.png',
    title: 'Larval Archives Website',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '7ff',
    description:
      'This is a web about butterflies all around the world,presenting you with beautiful images of the world without humans',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://codepen.io/debbyblessing/full/OJbXMGm',
    next: 1,
    previous: 1,
  },
  {
    image: './image/card6.png',
    title: 'Technical-Documentation Portfolio',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '10aa',
    description:
      'Technical documentation is a web that guides and describe how a product or services works,It is a more focused created to describe to use,functionality or architecture of a product, system or service  ',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://codepen.io/debbyblessing/full/zYowgzx',
    next: 0,
    previous: 0,
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
const popUp = document.querySelector('.modal-container');
const popUpDescription = popUp.querySelector('.modal-summary');
const popUpTitle = popUp.querySelector('.modal-project-title');
const popUpImage = popUp.querySelector('.modal-desktop-image');
const popUpItems = popUp.querySelector('.modal-attri-desktop-content');
const popBtnTop = popUp.querySelector('.modal-See-Live-Top');
const popbtnTop = popUp.querySelector('.modal-See-Source-Top');
const popBtnBtm = popUp.querySelector('.modal-See-Live-btm');
const popbtnBtm = popUp.querySelector('.modal-See-Source-btm');
const nextProject = document.querySelector('.modal-content-next-button');
const previousProject = document.querySelector('.modal-content-previous-button');

btns.forEach((btn) => {
  btn.addEventListener('click', function (event) {
    console.log(event.target.id);
    const obj = (card) => {
      return card.id === event.target.id;
    };
    const currentWork = recentWorkCards.find(obj);
    popUpDescription.textContent = currentWork.description;
    popUpTitle.textContent = currentWork.title;
    popUpImage.src = currentWork.image;
    const generalLiElements = (innerHTMLs) =>
      innerHTMLs
        .map((innerHTML) => `<li class="modal-desktop-tags contrast">${innerHTML}</li>`)
        .join('');
    const languageLiElements = generalLiElements(currentWork.items);
    popUpItems.innerHTML = languageLiElements;
    popBtnTop.href = currentWork.liveDemo;
    popbtnTop.href = currentWork.github;
    popBtnBtm.href = currentWork.liveDemo;
    popbtnBtm.href = currentWork.github;
    return popUp.classList.remove('hidden');
  });
});
//*

let recentWorkCardsIndex = 0;
const showProject = () => {
  const popupContent = document.querySelector('#modal-container');
  const currentProject = recentWorkCards[recentWorkCardsIndex];
  popUpDescription.textContent = currentProject.description;
  popUpTitle.textContent = currentProject.title;
  popUpImage.src = currentProject.image;
  const generalLiElements = (innerHTMLs) =>
    innerHTMLs
      .map((innerHTML) => `<li class="modal-desktop-tags contrast">${innerHTML}</li>`)
      .join('');
  const languageLiElements = generalLiElements(currentProject.items);
  popUpItems.innerHTML = languageLiElements;
  popBtnTop.href = currentProject.liveDemo;
  popbtnTop.href = currentProject.github;
  popBtnBtm.href = currentProject.liveDemo;
  popbtnBtm.href = currentProject.github;
};

nextProject.addEventListener('click', () => {
  recentWorkCardsIndex++;
  if (recentWorkCardsIndex >= recentWorkCards.length) {
    recentWorkCardsIndex = 0;
  }
  showProject;
});

previousProject.addEventListener('click', () => {
  recentWorkCardsIndex--;
  if (recentWorkCardsIndex < 0) {
    recentWorkCardsIndex = recentWorkCards.length - 1;
  }
  showProject;
});

showProject();
const cancelBtn = document.querySelector('.modal-cancel-container');
const modalCancel = () => {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.classList.add('hidden');
};
cancelBtn.addEventListener('click', modalCancel);

//navbar
const menu = document.querySelector('.navbar-container');
const menuLinks = document.querySelector('.nav-link');
// Display mobile menu
const navbarContainer = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', navbarContainer);
menuLinks.addEventListener('click', navbarContainer);
