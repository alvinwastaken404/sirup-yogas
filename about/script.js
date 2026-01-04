document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});