// Pega todos os botões
const buttons = document.querySelectorAll(".sobre-mim__botao");
// Pega todos os conteúdos
const contents = document.querySelectorAll(".sobre-mim__conteudo");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove classe "active" de todos
    buttons.forEach(btn => btn.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // Adiciona classe no botão clicado
    button.classList.add("active");

    // Mostra o conteúdo correspondente
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Deixa "Formação" visível ao carregar
document.querySelector(".sobre-mim__botao[data-tab='formacao']").classList.add("active");
document.getElementById("formacao").classList.add("active");