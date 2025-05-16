let nome = "Rodrigo"; // let declara a variavél mas pode ser alterada

// Usando o console
console.log(nome);
console.error(nome);
console.warn(nome);

// Usando o window alert (Tire o comentário para ver o resultado (os dois "//" antes do window))
// window.alert(nome);
// window.prompt("Insira o seu nome");

// Alterando a váriavel nome

nome = window.prompt("Insira o seu nome");

console.log(nome); // Mostra o nome digitado no prompt

// Exemplo de confirmação (booleano True ou False)

let confirmacao = window.confirm("Você confirma?"); // Gera true or false

// Podemos usar o que for disponível no window, sem começar com window.

alert(nome); // Retorna o nome em um alert
// prompt("Insira o seu nome"); // Pede para o usuário inserir o nome
confirm("Você confirma?"); // Abre um novo confirm