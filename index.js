


 
const cards = [
  {
    image: './image/language.svg',
    title: 'Language',
    languages: ['Javascript', 'Ruby', 'Html', 'Css'],
  },
  {
    image: './image/framework.svg',
    title: 'Framework',
    languages: ['Bootstrap', 'Capybara', 'Selenium', 'Ruby', 'RSpec'],
  },
  {
    image: './image/skill.svg',
    title: 'Skills',
    languages: ['Codekit', 'Github', 'Codepen', 'Gitlab', 'Terminal'],
  },
];

function attriCards(data) {
  this.image = data.image;
  this.title = data.title;
  this.languages = data.languages;
  this.createElement = function createElement() {
    const generalLiElements = (textContents) =>
      textContents
        .map((textContent) => `<li class="attribute-tags contrast">${textContent}</li>`)
        .join('');
    const languageLiElements = generalLiElements(this.languages);
    const div = document.createElement('div');
    div.innerHTML = ` <div class="flex-container">
    <div class="flex-box">
    <p class="attribute-ellip">
      <img class="attribute-img" src="${this.image}" alt="skill" />
    </p>
    <h3 class="attribute-title">${this.title}</h3>
    <ul class="attri-content">${languageLiElements}</ul>
  </div> 
  </div>`;
    return div;
  };
}

const section = document.querySelector('.flex-container');
function attachToDom(detail) {
  const portfolioCard = new attriCards(detail);
  const portfolio = portfolioCard.createElement();
  section.appendChild(portfolio);
}
cards.forEach(attachToDom);
  
const menu = document.querySelector('.navbar-container');
const menuLinks = document.querySelector('.nav-link');
// Display mobile menu
const navbarContainer = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', navbarContainer);
menuLinks.addEventListener('click', navbarContainer);