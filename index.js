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
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4aa',
    description:
      ' Lonem ipsium is simply dummy text of the printing and typeseting industry. Lorem ipeum ha been the industry standard du mmy text ever since the 500s ,when an unknown lorewm',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card2.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '2cc',
    description:
      ' Lonem ipsium is simply dummy text of the printing and typeseting industry. Lorem ipeum ha been the industry standard du mmy text ever since the 500s ,when an unknown lorewm',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card3.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '4bb',
    description:
      ' Lonem ipsium is simply dummy text of the printing and typeseting industry. Lorem ipeum ha been the industry standard du mmy text ever since the 500s ,when an unknown lorewm',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card4.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '8hh',
    description:
      ' Lonem ipsium is simply dummy text of the printing and typeseting industry. Lorem ipeum ha been the industry standard du mmy text ever since the 500s ,when an unknown lorewm',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card5.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '7ff',
    description:
      ' Lonem ipsium is simply dummy text of the printing and typeseting industry. Lorem ipeum ha been the industry standard du mmy text ever since the 500s ,when an unknown lorewm',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
  {
    image: './image/card6.png',
    title: 'Multi-Post Stories Gain+Glory',
    items: ['Javascript', 'Ruby on rails', 'Html', 'Css'],
    id: '10aa',
    description:
      ' Lonem ipsium is simply dummy text of the printing and typeseting industry. Lorem ipeum ha been the industry standard du mmy text ever since the 500s ,when an unknown lorewm',
    github: 'https://github.com/ibukun53',
    liveDemo: 'https://deploy-preview-9--uni-uni.netlify.app',
  },
];

function createRecentWorkElements(data) {
  this.image = data.image;
  this.title = data.title;
  this.items = data.items;
  this.description = data.description;
  this.github = data.github;
  this.liveDemo = data.liveDemo;
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
    const popUpDescription = (popUp.querySelector('.modal-summary').innerTEXT =
      currentWork.description);
    const popUpTitle = (popUp.querySelector('.modal-project-title').innerTEXT = currentWork.title);
    const popUpImage = (popUp.querySelector('.modal-desktop-image').src = currentWork.image);
    const popUpItems = (popUp.querySelector('.modal-desktop-tags').innerTEXT = currentWork.items);
    const popBtn = (popUp.querySelector('.modal-icon-liveDemo').innerTEXT = currentWork.liveDemo);
    const popbtn = (popUp.querySelector('.modal-icon-github').innerTEXT = currentWork.github);
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
