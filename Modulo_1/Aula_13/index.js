{/*
// Modo mais usado:
// inicialização ; condição ; finalização

for (let indice = 0; indice <= 10 ; indice++) {
    alert("Indice = " + indice)
}

*/}
{/*
// Podemos usar com alert também:
let indice = 0 // Declaramos antes a váriavel

for (alert("Inicializando o for"); indice <= 10; indice++) {
    alert("Indice = " + indice)
}
*/}
// o indice gerealmente é resumido para i, então ficaria. for (let i; i <= 10; i++)

let nome = "Rodrigo Granado"

for (let i = 0; i < nome.length; i++ ) {
    console.log(nome[i])
}