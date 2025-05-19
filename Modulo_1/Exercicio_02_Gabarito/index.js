// Exercicio 01

{/* 
// Declarando as variaveis
const carro1 = prompt("Digite o nome do primeiro carro:");
const carro2 = prompt("Digite o nome do segundo carro:");
const velocidade1 = prompt("Digite a velocidade em km/h do primeiro carro:");
const velocidade2 = prompt("Digite a velocidade em km/h do segundo carro:");

// Verificando qual carro é mais rápido
if (velocidade1 > velocidade2) {
    alert("O " + carro1 + " é mais rápido que o " + carro2);
} else if (velocidade1 < velocidade2) {
    alert("O " + carro2 + " é mais rápido que o " + carro1);
} else {
    alert("Os dois carros têm a mesma velocidade");
}
*/}

// Exercicio 02 Dificil

// Declarando as variaveis

const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

const defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
  } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
  }
  
pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)
  