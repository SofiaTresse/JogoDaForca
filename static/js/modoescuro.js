const darkModeToggle = document.getElementById('darkModeToggle');
const imgLogo1 = document.querySelector('.livro-logo1'); // Para a primeira imagem do header
const imgFaixa = document.querySelector('.faixa img'); // Para a imagem dentro da faixa

darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('h1').classList.toggle('dark-mode');
    document.querySelector('h2').classList.toggle('dark-mode');
    document.querySelector('a span').classList.toggle('dark-mode');
    document.querySelector('.faixa').classList.toggle('dark-mode');
    
 

    if (document.body.classList.contains('dark-mode')) {
        imgLogo1.src = './static/images/capa12.png'; // Imagem para o modo escuro
        imgFaixa.src = './static/images/capa22.png'; // Imagem dentro da faixa para o modo escuro
    } else {
        imgLogo1.src = './static/images/capa1.jpeg'; // Imagem para o modo claro
        imgFaixa.src = './static/images/capa2.jpeg'; // Imagem dentro da faixa para o modo claro
    }

    const span = document.querySelector('span'); // Ajuste o seletor conforme necessário
if (span) {
    span.remove(); // Remove o primeiro <span> encontrado
}
});
