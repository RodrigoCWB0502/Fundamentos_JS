function dobro(x) { // Função que recebe um parâmetro x
    alert("O dobro de " + x + " é " + (x * 2)); // Calcula o dobro de x e exibe um alert
}

{/*

dobro(5) // Chama a função dobro com o valor 5
dobro(7) // Chama a função dobro com o valor 7
dobro() // Chama a função dobro sem passar nenhum argumento, o que resultará em NaN (Not a Number) porque x será undefined

*/}

function dizerOla(nome = "mundo") { // nome = "mundo" define um valor padrão, então sempre que não tiver nada na chamada da função, nesse caso dizerOla() vai retornar o valor padrão!
    alert("Olá, " + nome + "!"); // Exibe um alert com uma saudação personalizada
}

{/*

dizerOla("Rodrigo"); // Chama a função dizerOla com o nome "Rodrigo"
dizerOla() // Chama a função retornando o valor padrão "mundo" 

*/}

function soma(a, b) {
    alert("Resultado da soma: " + (a + b)); // Exibe um alert com o resultado da soma de a e b
}

{/*

soma(10, 5); // Chama a função soma com os valores 10 e 5

*/}

function criarUsuario(nome, email, senha, tipo = "Admin") {
    const usuario = { // Criamos a váriavel usuario como um Objeto!
        nome, // Mesma coisa que nome: nome
        email, // Mesma coisa que email: email
        senha, // Mesma coisa que senha: senha 
        tipo // Mesma coisa que tipo: tipo
    }

    console.log(usuario);
}

criarUsuario("Rodrigo", "rodrigo@email.com", "1234") // tipo vem com o valor padrão Admin!

{/* 
    Quando definimos um valor padrão, ele sempre deve ficar por último, caso não seja o ultimo deve ser definido na chamada da função!
    
    Exemplo:
    
*/}

    function novoUsuario(nome, tipo="Admin", senha, email) {
        const usuario = {
            nome,
            email,
            senha,
            tipo
        }

        console.log(usuario)
    }

    novoUsuario("Rodrigo", "rodrigo@email.com", "1234")

{/* Por conta do tipo estar com um valor padão e não termos definido ele na chamada da função, ele fica embaralhado pela posição que ele está 
    
    Sempre declare valores opcionais, que ja tem um valor pré-definido no final da function
    
*/}


function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

function objetoComoParametro(usuario) {
    usuario.nome
    usuario.email
}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: "",
}

muitosParametros("Nome", "Telefone", "Endereco", "Aniversario", "Email", "Senha")

objetoComoParametro(dadosDoUsuario);