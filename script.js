


// Função para adicionar a classe 'fade-in' quando a seção estiver visível
function fadeInOnScroll() {
    const section = document.querySelector('.contact-section');
    const items = document.querySelectorAll('.contact-item');
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Verifica se a seção está visível na tela
    if (sectionPosition < windowHeight * 0.75) {
        section.classList.add('fade-in'); // Adiciona a classe 'fade-in' à seção
    }

    // Verifica se cada item está visível e adiciona a classe 'fade-in'
    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < windowHeight * 0.75) {
            item.classList.add('fade-in'); // Adiciona a animação aos itens
        }
    });
}

// Adiciona o evento de rolagem à janela
window.addEventListener('scroll', fadeInOnScroll);

// Executa a função para garantir que a animação aconteça se a seção já estiver visível
fadeInOnScroll();

