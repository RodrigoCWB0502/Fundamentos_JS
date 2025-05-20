{/*

// Exercicio 01 - Menu interativo

let opcao = ""

do {
    opcao = prompt("Selecione uma opção: " + 
        "\n 1) React" +
        "\n 2) CSS" +
        "\n 3) HTML" + 
        "\n 4) Java Script" + 
        "\n 5) Encerrar"
    )

    switch (opcao) {
        case "1": 
            alert("A opção React foi selecionada")
            break
        case "2":
            alert("A opção CSS foi selecioanada")
            break
        case "3":
            alert("A opção HTML foi selecionada")
            break
        case "4":
            alert("A opção JavaScript foi selecionada")
            break
        case "5":
            alert("Encerrando o programa...")
            break
        default:
            alert("Selecione uma opção válida")
    }
} while (opcao !== "5")

*/}

// Exercicio 02 - Controle financeiro

let saldo = parseFloat(prompt("Qual o saldo da sua conta? "))
let opcao = ""

do {
    opcao = prompt("Seu saldo: R$ " + saldo + "\nSelecione um dos métodos abaixo: " + 
        "\n1 - Adicionar dinheiro" +
        "\n2 - Retirar dinheiro" +
        "\n3 - Encerrar"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Insira o valor a ser somado: "))
            alert("Saldo atualizado: " + saldo)
            break
        case "2":
            saldo -= parseFloat(prompt("Insira o valor a ser retirado: "))
            alert("Saldo atualizado: " + saldo)
            break
        case "3":
            alert("Encerrando")
            break
        default:
            alert("Selecione uma opção válida")
    }
} while (opcao !== "3")