const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

console.log(arr);
// Adicionar Elementos
// Push
arr.push("Boromir") // Adiciona sempre no ultimo valor
console.log(arr);

// Unshift
arr.unshift("Rodrigo") // Adiciona sempre no primeiro elemento
console.log(arr);

// Remover Elementos. tire o comentário do inicio da linha 14
// arr.pop() // Remove o ultimo elemento do array - Caso você crie uma variavel ele mostra o valor removido
let ultimoElemento = arr.pop()
console.log(arr);
console.log(ultimoElemento); // Exibe o que foi removido

// Remove o primeiro elemento
ultimoElemento = arr.shift() // arr.shift() remove sempre o primeiro elemento
console.log(arr);
console.log(ultimoElemento);

// Pesquisar por um elemento
// Includes
const inclui = arr.includes("Gandalf") // retorna true no console, significa que existe.
console.log(inclui);

const falseInclui = arr.includes("Gandalf, o cinzento") // retorna false pois não existe Gandalf, o cinzento
console.log(falseInclui);

// Busca pelo indice
const indice = arr.indexOf("Gandalf") // Mostra o indice do elemento
console.log(indice);

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0, 4) // Copia os elementos até um certo indice e cria um novo array (Nome da váriavel) 
// Considere isso dentro dos (), o primeiro numero antes de , é o indice, então começa no zero, e o segundo numero é quantos elementos ele deve copiar
// Então copiamos 4 elementos, 0, 1, 2, 3

const outros = arr.slice(-4) // Copiamos de trás para frente, então os ultimos 4 elementos. -1 seria o ultimo elemento... 

console.log(arr); // Array original não é modificado
console.log(hobbits); // Printa os 4 primeiros
console.log(outros); // Printa os 4 ultimos
