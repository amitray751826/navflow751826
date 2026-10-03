/* =========================================================
   NovaFlow Landing Page
   Vanilla JavaScript for responsive navigation and usability.
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

function closeMenu() {
  primaryNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close the mobile menu after selecting a navigation link.
primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close the mobile menu when the user clicks outside it.
document.addEventListener("click", (event) => {
  const clickedInsideNav =
    primaryNav.contains(event.target) || menuToggle.contains(event.target);

  if (!clickedInsideNav) {
    closeMenu();
  }
});

// Keep navigation state clean when switching back to desktop width.
window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    closeMenu();
  }
});
