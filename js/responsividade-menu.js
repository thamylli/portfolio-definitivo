// botão hamburguer
const btnHamburguer = document.getElementById("btn-hamburguer");
const menuMobile = document.getElementById("menu-mobile");

btnHamburguer.addEventListener("click", () => {
    menuMobile.classList.toggle("ativo");
});

// dark mode no menu mobile também
const temaDesktop = document.getElementById("mudanca-tema");
const temaMobile = document.getElementById("mudanca-tema-mobile");

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

temaDesktop.addEventListener("click", toggleDarkMode);
temaMobile.addEventListener("click", toggleDarkMode);
