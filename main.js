// Get DOM elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle mobile navigation menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close mobile navigation menu when a link is clicked
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal options for animations
const scrollRevealOption = {
  distance: "60px",
  origin: "bottom",
  duration: 1200,
  delay: 200,
};

// Hero section animations
ScrollReveal().reveal(".hero-content h1", { ...scrollRevealOption });
ScrollReveal().reveal(".hero-content p", { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal(".hero-content .hero-buttons", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".hero-image img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 800,
});
