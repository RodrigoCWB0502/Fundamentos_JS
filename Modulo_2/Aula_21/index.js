function calcularMedia(a, b) {
    const media = (a + b) / 2 // Calculamos o valor da média a + b / 2

    return media; // Retornamos o valor da média
    // Usamos o return para trabalhar com valores fora da função
}

const resultado = calcularMedia(7, 2) // O valor foi armazenado na variável resultado

console.log(calcularMedia); // Imprime o resultado

function criarProduto(nome, preco) {
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Notebook Intel Core i3 8gb", 2600)

console.log(notebook);

// Podemos printar desse jeito também:

// console.log(criarProduto("Notebook Intel Core i3 8gb", 2600));

function areaRetangular(base, altura) {
    return base * altura // return pode ser qualquer expressão
}

console.log(areaRetangular(3, 5));

function areaQuadrada(lado) { // areaQuadrada chama a areaRetangular passando o lado (definido como 9 la embaixo)
    return areaRetangular(lado, lado) // Retorna o resultado
}

console.log(areaQuadrada(9)); // Chama a areaQuadrada com o valor 9

function ola() {
    let texto = "..." // Criamos a variável texto
    return texto // Retornamos o valor dela. A função acaba IMEDIATAMENTE após o return, então tudo depois é ignorado
    texto = "Olá mundo"
    console.log(texto);
}

console.log(ola());

function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        "Menor de idade"
    }
}

console.log(maioridade(20)); // Retorna no console, Maior de idade

console.log(maioridade(13)); // Retorna no console, Menor de idade