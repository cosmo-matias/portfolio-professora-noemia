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

});