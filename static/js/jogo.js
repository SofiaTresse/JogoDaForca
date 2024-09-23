let palavraAtual;
let dicaAtual;
let letrasAdivinhadas = [];
const tentativasMaximas = 6;
let tentativasRestantes;

function iniciarJogo() {
    const palavras = [
 "alex",
"henry",
"claremont-diaz",
"turbolixo",
"rafael luna",
"nora",
"june",
"turma do eixo",
"rainha mary",
"wimbledon",
"texas",
"david",
"karaokê",
"casamento real",
"beijo no jardim",
"festa de Ano Novo",
"email",
"revelação pública",
"casa de férias",
"vazamento de emails",
"final feliz",]; 
    const dicas = [
"Filho da presidente dos Estados Unidos e protagonista da história.",
"Príncipe britânico e interesse amoroso de Alex.",
"Sobrenome da família de Alex.",
"Escândalo que ocorre após um incidente no casamento real e inicia a relação de Alex e Henry",
"Senador dos EUA e amigo de Alex, que tem um papel importante na história.",
"Melhor amiga de Alex e neta do vice-presidente.",
"Irmã de Alex",
"Grupo que inclui Alex, Nora e June.",
"A avó de Henry, que tem uma posição importante na monarquia britânica.",
"Torneio de tênis onde Alex e Henry compartilham um momento importante.",
"Estado natal de Alex, onde ele tem fortes raízes.",
" Irmão mais velho de Henry, que é o próximo na linha de sucessão ao trono.",
"Local onde ocorre a famosa cena da música Dont Stop Me Now",
"Evento no qual Alex e Henry se envolvem em uma briga que vira notícia.",
"Primeiro momento em que Alex e Henry se beijam",
"Ocasião onde Alex e Henry compartilham um momento especial e se beijam novamente.",
"Meio através do qual Alex e Henry trocam confissões emocionais, que mais tarde são vazados.",
"Cena em que o relacionamento de Alex e Henry é exposto ao público, causando um grande escândalo.",
"Local onde Alex e Henry passam um tempo isolados, longe dos holofotes.",
"Escândalo que expõe o relacionamento íntimo entre Alex e Henry ao público.",
"Cena de conclusão em que Alex e Henry finalmente assumem seu relacionamento e encontram aceitação pública.",
    ]; 
    
    const indiceAleatorio = Math.floor(Math.random() * palavras.length); 
    palavraAtual = palavras[indiceAleatorio];
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
            palavraExibida += letra;
        } else {
            palavraExibida += " ";
        }
    }

    document.getElementById("palavra").textContent = palavraExibida; 
    document.getElementById("dica").textContent = `Dica: ${dicaAtual}`;
    document.getElementById("status").textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById("attempts").textContent = `Letras já tentadas: ${letrasAdivinhadas.join(", ")}`;
}

function adivinharLetra() {
    const entradaAdivinhacao = document.getElementById("guess"); 
    const letraAdivinhada = entradaAdivinhacao.value.toLowerCase();

    if (letraAdivinhada.length === 1 && /^[a-záéíóúäöç\s]+$/.test(letraAdivinhada)) {
        if (letrasAdivinhadas.indexOf(letraAdivinhada) === -1) {
            letrasAdivinhadas.push(letraAdivinhada);

            let letraNaoEncontrada = true;
            for (let i = 0; i < palavraAtual.length; i++) { 
                if (palavraAtual[i] === letraAdivinhada) { 
                    letraNaoEncontrada = false;
                    break;
                }
            }
            if (letraNaoEncontrada) {
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
                document.getElementById("status").textContent = "Você venceu!";
            } else if (tentativasRestantes <= 0) {
                document.getElementById("status").textContent = `Você perdeu! A palavra era: ${palavraAtual}`;
            }
        }
    }
    entradaAdivinhacao.value = "";
}

document.addEventListener("DOMContentLoaded", iniciarJogo);

