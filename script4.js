// SCRIPT DO MENU MOBILE

// Seleciona botões e o menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

// Abre/fecha o menu quando clicar no ícone\menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

// Fecha o menu ao clicar em qualquer link (opcional e recomendado)
const links = navbar.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});
