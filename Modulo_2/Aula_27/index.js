const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map - Faz transformações em array, pega um existente e cria um novo array baseado nele (Não faz modificações no existente)

{/* SEM USAR O MAP

const nomes = []

for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome)
}   

*/}

// Usando o map

const nomes = personagens.map(function (personagem) { // Cria a variável nomes, mapeando o nome dos personagens
    return personagem.nome
})

const nivel = personagens.map(function (niveis) {
    return niveis.nivel
})

console.log(nomes);
console.log(nivel);

// Filter - Filtra os elementos de um array (elementos especificos) e cria um array novo com o elemento especifico

{/* SEM USAR O FILTER

const orcs = []

for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === "Orc") [
        orcs.push(personagens[i])
    ]
}

*/}

// Usando o filter
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

console.log(orcs);

// Reduce - Transforma um array em algu outro elemento, (Ex: transforma o array personagem em um numero, string, etc)
// Outra explicação, ele passa pelo primeiro elemento "1" (Coleta dos dados do primeiro elemento e salva os resultados) -> "2" (Coletou os dados do segundo elemento e salva...) -> etc

const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) { // Por coletar os dados ele precisa de 2 parametros, para retornar um no final,
    return valorAcumulado + personagem.nivel // Soma os niveis de cada personagem
}, 0) // define o valor inicial do parametro valorAcumulado então começa a somar do 0

console.log(nivelTotal);

// Exemplo maior

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) { // Verifica se existe a chave valorAcumulado, se existir ele devolve um array
        valorAcumulado[personagem.raca].push(personagem) // Adiciona o personagem atual, na chave da raça dele
    } else {
        valorAcumulado[personagem.raca] = [personagem] // Cria a propriedade caso ela não exista, com o personagem atual [personagem]
    }
    
    return valorAcumulado
}, {}) // Objeto é criado aqui (Vazio)

console.log(racas);

// Assista esse video para mais explicações: https://www.youtube.com/watch?v=PojpwEbOQJg