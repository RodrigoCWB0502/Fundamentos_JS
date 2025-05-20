const turista = prompt("Qual é o seu nome turista?")
let cidades = "" // Armazena as cidades visitadas
let contagem = 0 // Contador de cidades visitadas

let continuar = prompt("Você visitou alguma cidade? (sim/não)") // Pergunta se o usuário visitou alguma cidade

while (continuar === "sim") { // Enquanto o usuário responder "sim", continua perguntando
    let cidade = prompt("Qual cidade você visitou?")
    cidades += " - " + cidade + "\n" // Adiciona a cidade à lista de cidades visitadas
    contagem++ // Incrementa o contador de cidades visitadas
    continuar = prompt("Você visitou mais alguma cidade? (sim/não)") // Pergunta novamente se o usuário visitou mais cidades
}

// Exibe o resultado final com o nome do turista, a quantidade de cidades visitadas e a lista de cidades

alert(turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas: \n" + cidades
)