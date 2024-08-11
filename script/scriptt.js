document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const navbar = document.querySelector(".navbar-menu");
  const home = document.querySelector(".home");

  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("active");
    home.classList.toggle("menu-active"); // Shift content down when menu is active
  });
});
