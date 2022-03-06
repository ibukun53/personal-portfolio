const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};
menu.addEventListener('click', mobileMenu);
// Display nav menu
const navMenu = () => {};
menuLinks.addEventListener('click',navMenu);