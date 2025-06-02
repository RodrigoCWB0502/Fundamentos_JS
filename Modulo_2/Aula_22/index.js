let pokemon = "Charmander" // Escopo mais externo

// O escopo mais interno seria dentro de um if - else ou dentro de uma função, como teremos agora

function evoluir() {
    pokemon = "Charmeleon" // Escopo mais interno
}

console.log(pokemon); // Chama a primeira variável
evoluir() // chamou o evoluir()
console.log(pokemon); // Mudou o valor de pokemon, e mostra o resultado alterado

{/* Mostou como, o escopo importa, pois o valor de pokemon, foi definido antes da função, e alterado depois. o Exemplo de agora, faremos o contrario em relação ao escopo */}

function criarAnimal() {
    let animal = "Gato" // Variável criada num escopo interno
}

criarAnimal()
console.log(animal); // Não vai funcionar sem ter seu valor devolvido para fora da função.

// Ou seja, uma variável criada num escopo interno, jamais será exibida num escopo interno sem ter seu valor devolvido para fora de uma função

{/* Explicando o porque o modo de criar variável "VAR" não é muito usado -> Nivel de escopo " FICTICIO (O ESCOPO DEPENDE MUITO DO SEU CÓDIGO) " */}

// Escopo 0 - Fora da função

function avaliarNota(nota) {
    if(nota > 60) {
        // Escopo 2 - Dentro do if dentro da funcao
        var aprovado = true // Criada a variável num escopo menor
        let situacao = "Aprovado"
    } else {
        // Escopo 2 - Dentro do else dentro da funcao
        var aprovado = false
        let situacao = "Reprovado"
    }

    // Escopo 1 - Dentro da função

    console.log(nota);
    console.log(aprovado); // Mesmo criando a variavel dentro do if, que seria um escopo menor, retorna o valor no console
    console.log(situacao); // Entende que foi criada num escopo menor e não retorna nada
}

avaliarNota(83)
avaliarNota(49)

{/* Ou seja, o var fica disponível no escopo mais interno, o que é ruim pois pode atrapalhar o código */}

// Fazer exercicio 09