const pessoas = [
    {nivel: 130, nome: "Rodrigo", classe: "Berserk", slayer: "Enderman"},
    {nivel: 30, nome: "Davi", classe: "Archer", slayer: "Zombie"},
    {nivel: 302, nome: "Missy", classe: "Mage", slayer: "Blaze"},
    {nivel: 98, nome: "Giulia", classe: "Healer", slayer: "Enderman"},
    {nivel: 87, nome: "Giuseppe", classe: "Tank", slayer: "Zombie"},
    {nivel: 88, nome: "Guilherme", classe: "Berserk", slayer: "Wolf"}
]

// Map

const nomes = pessoas.map(function (pessoa){
    return pessoa.nome
})
console.log(nomes);

// Filter

// Berserk
const classe = pessoas.filter(function (classePessoa) {
    return classePessoa.classe === "Berserk"
})
console.log(classe);

// Enderman
const slayer = pessoas.filter(function (slayerPessoa) {
    return slayerPessoa.slayer === "Enderman"
})
console.log(slayer);

// Reduce

// Somando o nivel
const somaNiveis = pessoas.reduce(function (valorTotal, nivelPessoa) {
    return valorTotal + nivelPessoa.nivel
}, 0)
console.log(somaNiveis);

// Listando os niveis
const listaNiveis = pessoas.reduce(function (listarNiveis, nivelPessoa) {
    if (listarNiveis[nivelPessoa.nivel]) {
        listarNiveis[nivelPessoa.nivel].push(nivelPessoa)
    } else {
        listarNiveis[nivelPessoa.nivel] = [nivelPessoa]
    }

    return listarNiveis
}, {})

console.log(listaNiveis);

// Sort

// Maior para o menor nivel
const maiorNivel = pessoas.slice().sort(function (a, b) {
    return b.nivel - a.nivel
})

// Comparação
console.log(pessoas);
console.log(maiorNivel);