const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar-links");
  const navLinks = document.querySelectorAll(".navbar-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav - show or hide an element
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
