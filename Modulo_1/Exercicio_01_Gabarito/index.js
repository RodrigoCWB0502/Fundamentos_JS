// Cadastro de usuário - Remova o {/* do inicio do código e */} do final para ver o resultado
{/*

const nome = prompt("Insira o seu nome"); // Declara a variável nome e pede para o usuário inserir o nome
const sobrenome = prompt("Insira o seu sobrenome"); // Declara a variável sobrenome e pede para o usuário inserir o sobrenome
const nascimento = prompt("Insira seu ano de nascimento"); // Declara a variável nascimento e pede para o usuário inserir o ano de nascimento
const estudo = prompt("Onde você estuda?"); // Declara a variável estudo e pede para o usuário inserir onde estuda

const idade = 2025 - nascimento; // Calcula a idade aproximada subtraindo o ano atual (2025) pelo ano de nascimento

// Retorna as informações em um alert - Para quebra de linhas, usamos "\n" sempre tem que estar entre aspas
alert(
    "Cadastro realizado com sucesso!" + 
    "\nNome do aluno: " + nome + " " + sobrenome + 
    "\nIdade: " + idade + " (Aproximadamente)" + 
    "\nLocal de estudo: " + estudo
);

*/}

// Operações matemáticas

// declaramos o primeiro número e o segundo número
const num1 = parseFloat(prompt("Insira o primeiro número")); 
const num2 = parseFloat(prompt("Insira o segundo número"));

// Usaremos parseFloat para conseguirmos fazer operações de soma, pois estava juntando os numeros e ficava: num1num2 

const numero1 = parseFloat(num1);
const numero2 = parseFloat(num2);

// Operações matematicas: 

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

// Exibindo os resultados:

alert("Soma: " + soma + "\nSubtração: " + subtracao + "\nMultiplicação: " + multiplicacao + "\nDivisão: " + divisao);