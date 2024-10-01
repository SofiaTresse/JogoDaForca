// Alterna entre o modo claro e escuro
const darkModeToggle = document.getElementById('darkModeToggle');
const imgLogo1 = document.getElementById('imgLogo1'); // Certifique-se de que imgLogo1 está definido
const imgElement = document.querySelector('.faixa img'); // Para a imagem dentro de .faixa

darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('h1').classList.toggle('dark-mode');
    document.querySelector('h2').classList.toggle('dark-mode');
    document.querySelector('a span').classList.toggle('dark-mode');
    document.querySelector('.faixa').classList.toggle('dark-mode'); // Corrigido para .faixa

    if (document.body.classList.contains('dark-mode')) {
        imgLogo1.src = '../images/capa12.png'; // Caminho da imagem no modo escuro
    } else {
        imgLogo1.src = '../images/capa1.jpeg'; // Caminho da imagem no modo claro
    }

    if (document.body.classList.contains('dark-mode')) {
        imgElement.src = '../images/capa22.png'; // Caminho da imagem para o modo escuro
    } else {
        imgElement.src = '../images/capa2.jpeg'; // Caminho da imagem para o modo claro
    }
});
