// O Switch é uma estrutura de controle que permite executar diferentes blocos de código com base no valor de uma variável ou expressão.
// É uma alternativa ao uso de múltiplos if-else if-else.

// Exemplo 01
{/*
// Definindo uma variável

const resultado = prompt("Escolha uma alternativa: \n a) \n b) \n c)")

// Usando a variável no Switch

switch (resultado) {
    case "a":
        alert("Você escolheu a alternativa A");
        break;
    case "b":
        alert("Você escolheu a alternativa B");
        break;
    case "c":
        alert("Você escolheu a alternativa C");
        break;
    default:
        alert("Alternativa inválida");
        break;
}
 */}

// Exemplo 02

// Definindo uma variável

const resultado = prompt("Escolha uma alternativa: \n a) \n b) \n c)")

// Transformando em parsefloat

const resultadoNumerico = parseFloat(resultado)

// Usando a variável no Switch ( usando numeros )

switch (resultadoNumerico) {
    case 1: // Alterado de "a" para 1
        alert("Você escolheu a alternativa A");
        break;
    case 2: // Alterado de "b" para 2
        alert("Você escolheu a alternativa B");
        break;
    case 3: // Alterado de "c" para 3
        alert("Você escolheu a alternativa C");
        break;
    default:
        alert("Alternativa inválida");
        break;
}