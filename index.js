const menu = document.querySelector('.navbar-container');
const menuLinks = document.querySelector('.nav-link');
// Display mobile menu
const navbarContainer = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', navbarContainer);
menuLinks.addEventListener('click', navbarContainer);
