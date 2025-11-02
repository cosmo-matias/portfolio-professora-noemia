document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('menu-ativo');
    });

    // --- CÓDIGO DO SLIDESHOW (NOVO) ---
    const slides = document.querySelectorAll('.slide');
    let slideAtual = 0;
    const tempoDeSlide = 5000; // 5000 milissegundos = 5 segundos

    function mostrarProximoSlide() {
        // Remove a classe 'active-slide' do slide atual
        slides[slideAtual].classList.remove('active-slide');

        // Calcula o próximo slide, voltando ao primeiro se chegar ao fim
        slideAtual = (slideAtual + 1) % slides.length;

        // Adiciona a classe 'active-slide' ao novo slide
        slides[slideAtual].classList.add('active-slide');
    }

    // Inicia a troca automática de slides
    setInterval(mostrarProximoSlide, tempoDeSlide);

    // --- LÓGICA PARA MÚLTIPLOS SLIDERS INDEPENDENTES ---
    const todosOsSliders = document.querySelectorAll('.slider-container');

    todosOsSliders.forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const slides = Array.from(track.children);
        const nextButton = slider.querySelector('.next-button');
        const prevButton = slider.querySelector('.prev-button');
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;

        // Função para mover o slide
        const moveToSlide = (targetIndex) => {
            track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
            currentIndex = targetIndex;
        };

        // Evento do botão "Próximo"
        nextButton.addEventListener('click', () => {
            let proximoIndex = currentIndex + 1;
            if (proximoIndex > slides.length - 1) {
                proximoIndex = 0; // Volta para o primeiro
            }
            moveToSlide(proximoIndex);
        });

        // Evento do botão "Anterior"
        prevButton.addEventListener('click', () => {
            let anteriorIndex = currentIndex - 1;
            if (anteriorIndex < 0) {
                anteriorIndex = slides.length - 1; // Vai para o último
            }
            moveToSlide(anteriorIndex);
        });
    });

});