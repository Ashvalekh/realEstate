'use strict';

const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

if ($navbar && $navToggler) {
    $navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));
} else {
    console.error("Navbar or NavToggler element not found.");
}
