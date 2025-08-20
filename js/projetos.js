document.addEventListener("DOMContentLoaded", () => {
    const projetos = document.querySelectorAll(".projeto");
    const setaEsquerda = document.querySelectorAll(".seta-projetos")[0];
    const setaDireita = document.querySelectorAll(".seta-projetos")[1];
    const filtro = document.getElementById("tipo-projeto");

    let pagina = 0;               
    const porPagina = 3;   // AGORA EXIBINDO 3 POR PÁGINA
    let projetosFiltrados = [...projetos]; 

    function mostrarProjetos() {
        projetos.forEach(p => p.style.display = "none");

        const inicio = pagina * porPagina;
        const fim = inicio + porPagina;

        projetosFiltrados.slice(inicio, fim).forEach(p => {
            p.style.display = "block";
        });
    }

    filtro.addEventListener("change", () => {
        const valor = filtro.value;
        if (valor === "Todos") {
            projetosFiltrados = [...projetos];
        } else {
            projetosFiltrados = [...projetos].filter(p => p.dataset.status === valor);
        }
        pagina = 0;
        mostrarProjetos();
    });

    setaEsquerda.addEventListener("click", () => {
        if (pagina > 0) {
            pagina--;
        } else {
            pagina = Math.ceil(projetosFiltrados.length / porPagina) - 1;
        }
        mostrarProjetos();
    });

    setaDireita.addEventListener("click", () => {
        if ((pagina + 1) * porPagina < projetosFiltrados.length) {
            pagina++;
        } else {
            pagina = 0;
        }
        mostrarProjetos();
    });

    mostrarProjetos();
});

