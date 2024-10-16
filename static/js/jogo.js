let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;

function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * palavras.length); 
    palavraAtual = palavras[indiceAleatorio].toLowerCase(); // Converte a palavra para minúsculas
    dicaAtual = dicas[indiceAleatorio];
    letrasAdivinhadas = [];
    tentativasRestantes = tentativasMaximas;
    atualizarDisplayDoJogo();
}

function atualizarDisplayDoJogo() {
    let palavraExibida = "";
    for (let i = 0; i < palavraAtual.length; i++) { 
        const letra = palavraAtual[i];
        if (letrasAdivinhadas.indexOf(letra) !== -1 || letra === " ") {
            // Mostra a primeira letra em maiúscula, as demais em minúscula
            if (i === 0 || palavraAtual[i - 1] === " ") {
                palavraExibida += letra.toUpperCase(); 
            } else {
                palavraExibida += letra.toLowerCase(); 
            }
        } else {
            palavraExibida += " _ "; // Usa underscore para letras não adivinhadas
        }
    }

    document.getElementById("palavra").textContent = palavraExibida; 
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentadas: ${letrasAdivinhadas.join(", ")}`;
}

function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess"); 
    const letraAdivinhada = entradaAdivinhacao.value.toLowerCase(); // Transforma a letra em minúscula

    if (letraAdivinhada.length === 1 && /^[a-záéíóúäöç\s]+$/.test(letraAdivinhada)) {
        if (letrasAdivinhadas.indexOf(letraAdivinhada) === -1) {
            letrasAdivinhadas.push(letraAdivinhada);

            if (palavraAtual.indexOf(letraAdivinhada) === -1) { 
                tentativasRestantes--;
            }

            atualizarDisplayDoJogo();
            desenharBoneco(tentativasRestantes); 

            let palavraCompleta = true;
            for (let i = 0; i < palavraAtual.length; i++) {
                if (letrasAdivinhadas.indexOf(palavraAtual[i]) === -1 && palavraAtual[i] !== " ") {
                    palavraCompleta = false;
                    break;
                }
            }

            if (palavraCompleta) {
                document.getElementById("status").textContent = "O amor é amor, não importa a forma que ele tome. Ser LGBT é uma celebração da diversidade e da beleza da autenticidade. Orgulhe-se de quem você é e saiba que seu amor é verdadeiro e válido! 🌈❤️";
                document.getElementById("ganhou").style.display = "block"; // Mostra a imagem de vitória
                document.getElementById("vitoriaGif").style.display = "block"; // Mostra o GIF de vitória
            } else if (tentativasRestantes <= 0) {
                document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}`;
                document.getElementById("ganhou").style.display = "none"; // Oculta a imagem de vitória se o jogador perdeu
                document.getElementById("vitoriaGif").style.display = "none"; // Oculta o GIF se o jogador perdeu
            }
            
            
        }
    }
    entradaAdivinhacao.value = "";

    const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
    toggleDarkModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const forca = document.getElementById('forca');
        forca.classList.toggle('dark-mode');
    });
}

document.addEventListener("DOMContentLoaded", iniciarJogo);
