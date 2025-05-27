// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
]

console.log(arr); // Exibe todo o array
console.log(arr[0]); // Exibe apenas o 1° Nivel
console.log(arr[1][0]); // Exibe o segundo indice do array[1] e o primeiro elemento[0] do indice que é 2° Nivel
console.log(arr[2][0][1]); // Exibe o terceiro indice do array[2] e o primeiro array[0] que está dentro do array[2] e o segundo elemento [1]

const matriz = [ // l = linha c = coluna. l1 c1 = linha 1 coluna 1 (Para conseguir explicar melhor)
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]

console.table(matriz) // console.table gera uma tabela, se possível, com linhas e colunas

matriz[0].push("l1, c5") // Adicionamos o [0] logo após a Matriz, indicando que queremos a primeira linha
console.table(matriz);

matriz[1].push("l2, c5") // Acicionamos o [1] logo após a Matriz, indicando a segunda linha
console.table(matriz);

matriz[2].push("l3, c5") // Acicionamos o [2] logo após a Matriz, indicando a terceira linha
console.table(matriz);

// Usando for

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) { // Pega todo elemento de cada linha e coluna
    const elemento = matriz[i][j] // matriz[i] = Linha e o [j] = valor da linha, no caso l1, c1 - l1, c2 etc
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
}