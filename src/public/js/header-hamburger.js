const hamburger = document.getElementById("hamburger");
const body = document.getElementById("body");
const html = document.getElementById("html");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger--active");
  menu.classList.toggle("menu--active");
  html.classList.toggle("scroll-turn-off"); // this class is in _header.scss
  
});

const menu = document.getElementById("menu");
