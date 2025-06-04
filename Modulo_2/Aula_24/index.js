// Uma função recursiva, é uma função que chama ela mesma. Isso cria pilha de chamada de funções que vão se repetindo

function dividir(num) {
    console.log(num);
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

dividir(40) // Chama a primeira se tiver uma segunda, ele chama a segunda e para a primeira, so volta para a primeira ate que a segunda for resolvida

{/*

function dobrar(num) {
    console.log(num);
    dobrar(num * 2)
}

dobrar(1)

// Essa recursão, é chamada infinitas vezes, pois ela não foi "Resolvida" (Ela sempre vai continuar gerando e nunca vai parar pois não tem nenhum parametro que faça isso)

*/}


// Fatorial de 5: 5! === 5 * 4 * 3 * 2 * 1 === 5 * 4!
function fatorial(num) {
    console.log("Número: " + num);
    if (num === 0) { // Caso base, se o numero for uma fatorial de 0, ele retorna 1
        return 1
    } else if (num === 1) { // Se for uma fatorial de 1, ele também retorna 1
        return 1 
    } else {
        console.log(num + " * !" + (num - 1));
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5));