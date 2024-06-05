var nome;

var nome=prompt("Digite seu nome: ");
console.log("Primeiramente digite seu nickname: " + nome);

function rankingFinal(){

var vitorias;
var derrotas;

var vitorias=prompt("Digite o seu número de vitórias: ");
var derrotas=prompt("Digite o seu número de derrotas: ");

let calculoRanking = (vitorias - derrotas);

console.log("Seu saldo é de: " + calculoRanking + " partidas");

if(calculoRanking <= 10) {
   level = "Ferro"
}else if (calculoRanking > 11 && calculoRanking <= 20) {
    level = "Bronze"
}else if (calculoRanking > 21 && calculoRanking <= 50) {
    level = "Prata"
}else if (calculoRanking > 51 && calculoRanking <= 80) {
    level = "Ouro"
}else if (calculoRanking > 81 && calculoRanking <= 90) {
    level = "Diamante"
}else if (calculoRanking > 91 && calculoRanking <= 100) {
    level = "Lendário"
}else if(calculoRanking >= 101) {
    level = "Imortal"
    }

console.log("O seu nível é: " + level );
}

