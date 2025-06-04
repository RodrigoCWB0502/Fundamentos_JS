// uma high-order function é uma função, que recebe outra função como um parametro (nesse caso é o operacao)

function calcular(a, b, operacao) { // operacao é uma função, mesmo passando como parametro (Quando for passada como parametro, não precisa de () )
    console.log("Realizando uma operação.");
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma");
    return x + y
}

console.log(calcular(3, 5, somar)); // Operação = soma

console.log(calcular(8, 4, function(x, y) { // função anonima e operacao = funcao anonima
    console.log("Realizando uma subtração");
    return x - y
}));

function exibirElemento(elemento, indice, array) { // Trabalhando com elementos de um array
    console.log({elemento, indice, array});
}

const lista = ["Maça", "Laranja", "Banana", "Limão"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista) // Lista o indice do array "lista[i]", mostra a posição "i" e mostra a lista completa "lista"
}

// Usando o forEach (Que é uma high-order function)

lista.forEach(exibirElemento) // Faz a mesma coisa que o for(let i = 0)... Mas de uma forma bem resumida

// Usando função anonima

lista.forEach(function (elemento, indice, array) { // Retorna a mesma coisa que exibirElemento()
    console.log({elemento, indice, array});
})