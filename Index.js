let hamburger = document.querySelector(".bi");
let navLink = document.querySelector(".navLinks");
let openNav = document.querySelector(".openNav");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("openNav");
});
