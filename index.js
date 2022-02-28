//
//const navtoggle = document.getElementById('navToggle');
//const nav = document.getElementById('nav');
//let navIcon = document.getElemenByAll('.navIcon');

//navtoggle.addEventListener('click', function () {

//nav.classList.toggle('what is ur name') ;
// navIcon.forEach((icon) => {
//icon.classList.toggle('hidden');
//console.log('navtoggle')
//});

//function openNav() {
//var  openNav= document.getElementById('links');
//if ( openNav.style.display === 'block') {
//closeNav.style.display = 'none';
//} else {
////openNav.style.display = 'block';
//
//var closeNav= document.getElemenByAll('.navIcon');
//if (closeNav.style.display === 'block') {
//closeNav.style.display = 'none';
//} else {
//closeNav.style.display = 'block';

//*

/*const openNav= document.querySelector('.openNav');
var links= document.querySelector('#links');
var closeNav= document.querySelector('.closeNav');

var myFunction ='closed'

openNav.addEventListener('click', function() {

  if (myFunction === 'closed') {
    links.style.display = 'block'
    myFunction = 'open'
  } else {
    links.style.display = 'none'
    myFunction = 'closed'
  }
});

closeNav.addEventListener('click',function(){
  links.style.display = 'none';
  myFunction = 'closed';
});


window.addEventListener('mouseup', function(e) {
  var x = document.querySelector('#links');
  if (event.target != document.querySelector(".icon")) {
     x.style.display = "none";
  }
});
*/

const menu = document.querySelector('mobile-menu');
const menulist = document.querySelector('nav-menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('.is-active');
  menuLists.classList.toggle('active');
});

console.log();
