
function somar(a, b) {
    return a + b 
}

const operacao = somar // Como eu não coloquei o () logo após somar, ele entende que a variável operacao é igual (a mesma coisa) que a váriavel somar.

console.log(operacao(4, 5)); // endende que operacao é a mesma coisa que a função somar, então retorna o resultado que teria a função somar

const subtrair = function (a,  b) { // isso é uma função anonima, pois ela não tem nome, só funciona dentro de uma variável.
    return a - b
}

console.log(subtrair(36, 13));

{/* Nesse exemplo de baixo vai dar erro pois ela não esta incluida numa variável
    
function (a, b) {
    return a - b
}

*/}

// ESSE É O PERIGO DAS FUNÇÕES ANONIMAS!

olaMundo() // Vai exibir a mensagem (Função que não é anonima)
oiMundo() // Vai dar um erro (Função anonima)

function olaMundo() {
    console.log("Olá, mundo!");
}

const oiMundo = function() {
    console.log("Oi, mundo");
}

// Por que isso acontece? Simples, quando uma página JS é executada, as função são as primeiras coisas a serem executadas, então a função olaMundo() é iniciada antes de ser chamada 
// Mesmo que a função seja criada depois de ser chamada (chamada na linha 26, criada na linha 29) ja com as anonimas não funciona assim, pois está incluida numa variável. 
// Então só podemos acessar ela após a variável (linha 36+)