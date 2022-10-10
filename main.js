const closeMenu = document.querySelector("header .menu .back");
const openMenu = document.querySelector("header img");

const menu = closeMenu.parentElement;

openMenu.addEventListener("click", () => {
  menu.style.display = "grid";
});

closeMenu.addEventListener("click", () => {
  menu.style.display = "none";
});
