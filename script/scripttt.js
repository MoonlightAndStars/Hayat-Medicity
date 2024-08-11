let typed = new Typed(".auto-type", {
  strings:["Compassionate Care, Exceptional Healing",
"Your Health, Our Commitment",
"Innovative Medicine, Personalized Care",
"Trusted Excellence in Every Touch",
"Where Every Life is a Priority",
"Leading Care with a Heart",
"Dedicated to Your Well-being",
"Empowering Health, Enriching Lives",
"Advanced Medicine, Warmth in Every Visit",
"Your Partner in Lifelong Health"],
typeSpeed: 30,
backSpeed:15,
loop:true
})



document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const navbarMenu = document.querySelector(".navbar-menu");
  const homeSection = document.querySelector(".home");

  menuButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("active");
    homeSection.classList.toggle("menu-active");
  });
});


document.querySelectorAll('.toggle-content').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            button.textContent = 'Show Less';
        } else {
            content.style.display = 'none';
            button.textContent = 'Click to learn more';
        }
    });
});
