const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);
function myFunction() {}
// Display nav menu
const navMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menuLinks.addEventListener('click',navMenu);
function myFunction() {}