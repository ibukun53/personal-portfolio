function Portfoiliocard(name, description, language, skills, Framework, link) {
  this.name = name;
  this.description = description;
  this.language = language;
  this.skills = skills;
  this.Framework = Framework;
  this.link = link;
  this.createElement = function createElement() {
    // eslint-disable-next-line no-console
    console.log(
      `Hello, ${this.name} is a platform that tells how to ${this.description} using the Language which  are${this.language}, while the Skills are${this.skills},the framework to be use are${this.Framework},and ${this.link} to contact us.`,
    );
  };
}
const portfoiliocard = new Portfoiliocard(
  'Personal portfoilio',
  'build a product,feature or website Look through some of my work and experience! If you like what you see and have a project you need coded',
  'Javscript,Ruby,Html and Css',
  'Bootstrap,RUby,RSpec,Capybara and Selenium',
  ' Codekit, Github,Codepen,Gitlab and Terminal',
  'debbyblessing1234@gmail.com',
);

portfoiliocard.createElement();
function myFunction() {
  const newCard = document.createElement('h3');
  const textnew =
    document.createTextNode(`Hello, ${this.name} is a platform that tells how to ${this.description} using the Language which  are${this.language}, while the Skills are${this.skills},the framework to be use are${this.Framework}
,and ${this.link} to contact us.`);
  newCard.appendChild(textnew);
  document.getElementById('.card-header').appendChild(newCard);
}
