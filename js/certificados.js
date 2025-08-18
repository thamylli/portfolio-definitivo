// Pegar elementos
const pastas = document.querySelectorAll('.pasta');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const fechar = document.getElementById('fechar');

// Abrir aba flutuante ao clicar na pasta
pastas.forEach(pasta => {
    pasta.addEventListener('click', () => {
        const galeriaId = pasta.getAttribute('data-galeria');
        const galeria = document.getElementById(galeriaId);

        galeria.style.display = 'block';

        // Clique em cada imagem da aba para abrir modal
        galeria.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImg.src = img.src;
            });
        });

        // Botão de fechar aba
        galeria.querySelector('.fechar-aba').addEventListener('click', () => {
            galeria.style.display = 'none';
        });
    });
});

// Fechar modal
fechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
