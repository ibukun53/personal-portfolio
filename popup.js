const cards = [
  {
    images: {
      liveIcon: '.image/icon-Export.svg',
      sourceIcon: '.image/icon-GitHub.svg ',
      mobileimage: '.image/mobile-popup.svg',
      desktopimage: '.image/popup.svg" ',
    },
    title: 'Keeping Track of hundreds of components',
    languages: {
      desktopLanguage: ['CodeKit', 'Github', 'Bootstrap', 'Terminal', 'Javascript', 'Codepen'],
      mobileLanguage: ['Javascript', 'Css', 'Html', 'Ruby'],
    },
    tags: {
      name1: 'See Live',
      name2: 'See Project',
    },
    description:
      'Lonem ipsium is simply dummy text of the printing and typeseting industry. Lorem ipeum ha been the industry standard dummy text ever since the 500s ,when an unknown printer took agallery of type and sctambled it 1960s with the relea Lonem ipsium is simply dummy text othe printing and typeseting industry.Lonem ipsium is simply dummy text of the printing an typeseting industry. Lorem ipeum has been the industry standard dummy text ever since the',
  },
];

function showProject(data) {
  this.title = data.title;
  this.image = data.image;
  this.description = data.description;
  this.languages = data.languages;
  this.tags = data.tags;
  this.createElement = function createElement() {
    const generalLiElements = (textContents) =>
      textContents
        .map((textContent) => `<li class="attribute-tags contrast">${textContent}</li>`)
        .join('');
    const languageLiElements = generalLiElements(this.languages);
    const div = document.createElement('div');
    div.innerHTML = `<div class="detail-container">
        <img class="mobile-image" src="${this.image.mobileimage}" alt="beauty" />
        <img class="image" src="${this.image.desktopimage}" alt="beauty" />
        <div class="heading">
          <h1 class="project-title">${this.title}</h1>
          <div class="content-btn">
            <a href="#top" aria-label="button">
              <button-style class="See-Live"
                >${this.tags.name1}
                <img src="${this.image.liveIcon}"class="icon" alt="Icon - Export" />
              </button-style>
            </a>
            <a href="#top" aria-label="button">
              <button-style class="See-Source"
                >${this.tags.name2}
                <img src="${this.image.sourceIcon}" class="icon" alt="Icon -GitHub" /> </button-style
            ></a>
          </div>
        </div>
        <ul class="attri-content">${languageLiElements}
        </ul>
        <p class="summary">${this.description}
          
        </p>
        <div class="btn">
          <a href="#top" aria-label="button">
            <button-style id="live-btn" class="See-Live"
              >${this.tags.name1}
              <img src="${this.image.liveIcon}" class="icon" alt="Icon - Export" />
            </button-style>
          </a>
          <a href="#top" aria-label="button">
            <button-style id="source-btn" class="See-Source"
              >${this.tags.name2}
              <img src="${this.image.sourceIcon}" class="icon" alt="Icon -GitHub" /> </button-style
          ></a>
        </div>
      </div>`;
    return div;
  };
}
const data = cards;
const div = document.querySelector('.detail-container');
function attachToDom(detail) {
  const portfolioCard = new showProject(detail);
  const portfolio = portfolioCard.createElement();
  div.appendChild(portfolio);
}
attachToDom(data);