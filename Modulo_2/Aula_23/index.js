// os métodos em JS, são funções atreladas a objetos, exemplo disso.

// Escreva no console, typeof console - retorna objeto indicando que console, é um objeto.

// Agora se você escrever, typeof console.log retorna function, pois console.log é um método, ou seja, uma função atrelada a um objeto

let pessoa = {
    nome: "Rodrigo",
    idade: 20,

    // Criando uma função dentro de um objeto (NÃO PRECISA DO FUNCTION ANTES - AO COLOCAR O MOUSE ENCIMA DO dizerOla() o VSCode mostra que é um method - metodo)
    dizerOla() {
        console.log("Olá, mundo! Meu nome é " + this.nome) // Se deixar apenas nome ele não vai puxar - o this significa: esse objeto(this) . nome
    }
}

console.log(pessoa);

pessoa.dizerOla()