{/*
// Exercicio 01 - Tabuada

let numero = parseFloat(prompt("Insira um numero para calcularmos a tabuada: "))
let resultado = ""

for (let i = 1; i <= 20; i++) {
    resultado += " -> " + numero + " x " + i + " = " + (numero * i) + "\n"  
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)
*/}

// Exercicio 02 - Procurando Palíndromos

const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}

