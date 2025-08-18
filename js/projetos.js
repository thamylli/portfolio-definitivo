document.addEventListener("DOMContentLoaded", () => {
    const projetos = document.querySelectorAll(".projeto");
    const setaEsquerda = document.querySelectorAll(".seta-projetos")[0];
    const setaDireita = document.querySelectorAll(".seta-projetos")[1];
    const filtro = document.getElementById("tipo-projeto");

    let pagina = 0;               // página atual
    const porPagina = 4;          // quantos aparecem por vez
    let projetosFiltrados = [...projetos]; // lista atual

    // Função para exibir os projetos da página atual
    function mostrarProjetos() {
        projetos.forEach(p => p.style.display = "none");

        const inicio = pagina * porPagina;
        const fim = inicio + porPagina;

        projetosFiltrados.slice(inicio, fim).forEach(p => {
            p.style.display = "block";
        });
    }

    // Atualiza lista ao trocar filtro
    filtro.addEventListener("change", () => {
        const valor = filtro.value;
        if (valor === "Todos") {
            projetosFiltrados = [...projetos];
        } else {
            projetosFiltrados = [...projetos].filter(p => p.dataset.status === valor);
        }
        pagina = 0; // reinicia na primeira página
        mostrarProjetos();
    });

    // Botão esquerda
    setaEsquerda.addEventListener("click", () => {
        if (pagina > 0) {
            pagina--;
        } else {
            // se já está na primeira, volta para a última
            pagina = Math.ceil(projetosFiltrados.length / porPagina) - 1;
        }
        mostrarProjetos();
    });

    // Botão direita
    setaDireita.addEventListener("click", () => {
        if ((pagina + 1) * porPagina < projetosFiltrados.length) {
            pagina++;
        } else {
            // se chegou no fim, volta para o início
            pagina = 0;
        }
        mostrarProjetos();
    });

    mostrarProjetos(); // inicializa
});

