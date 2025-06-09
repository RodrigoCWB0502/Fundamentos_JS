const pessoas = [
    {nivel: 130, nome: "Rodrigo", classe: "Berserk", slayer: "Enderman"},
    {nivel: 30, nome: "Davi", classe: "Archer", slayer: "Zombie"},
    {nivel: 302, nome: "Missy", classe: "Mage", slayer: "Blaze"},
    {nivel: 98, nome: "Giulia", classe: "Healer", slayer: "Enderman"},
    {nivel: 87, nome: "Giuseppe", classe: "Tank", slayer: "Zombie"},
    {nivel: 88, nome: "Guilherme", classe: "Berserk", slayer: "Wolf"}
]

// Map

const map = pessoas.map(function (nomePessoa){
    return nomePessoa.nome
})

console.log(map);

// Filter

const filter = pessoas.filter(function(slayer) {
    return slayer.slayer === "Enderman"
})

console.log(filter);

// Reduce

const reduce = pessoas.reduce(function (nivelTotal, niveis) {
    return nivelTotal + niveis.nivel
}, 0)

console.log(reduce);

const listaNiveis = pessoas.reduce(function (listarNiveis, niveis) {
    if (listarNiveis[niveis.nivel]) {
        listarNiveis[niveis.nivel].push(niveis)
    } else {
        listarNiveis[niveis.nivel] = [niveis]
    }

    return listarNiveis
}, {})

console.log(listaNiveis);

// Sort

const maiorNivel = pessoas.slice().sort(function (a, b) {
    return b.nivel - a.nivel
})

console.log(maiorNivel);