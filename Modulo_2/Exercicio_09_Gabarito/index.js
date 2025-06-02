let opcao = ""

function Triangulo() { // Realiza as operações da área do triangulo
    let base = parseFloat(prompt("Insira o tamanho da base:"))
    let altura = parseFloat(prompt("Insira a altura do triangulo:"))
    let resultado = alert("Resultado da área do triângulo é: " + (base * altura) / 2)

    return (resultado)
}

function Retangulo() { // Realiza as operações da área do retângulo
    let base = parseFloat(prompt("Insira o tamanho da base:"))
    let altura = parseFloat(prompt("Insira a altura do retângulo:"))
    let resultado = alert("Resultado da área do retângulo é: " + (base * altura))

    return (resultado)
}

function Quadrado() { // Realiza as operações da área do quadrado
    let lado = parseFloat(prompt("Insira o valor do lado:"))
    let resultado = alert("Resultado da área do quadrado é: " + (lado * lado))

    return (resultado)
}

function Trapezio() { // Realiza as operações da área do trapezio
    let baseMaior = parseFloat(prompt("Insira o valor da base maior:"))
    let baseMenor = parseFloat(prompt("Insira o valor da base menor:"))
    let altura = parseFloat(prompt("Insira o valor da altura:"))
    let resultado = alert("Resultado da área do trapézio é: " + (baseMaior + baseMenor) * altura / 2)

    return (resultado)
}

function Circulo() { // Realiza as operações da área do circulo
    const pi = parseFloat(3.14)
    let raio = parseFloat(prompt("Insira o valor do raio do Circulo"))
    let resultado = alert("Resultado da área do círculo é: " + (pi * (raio * raio)))

    return (resultado)
}

do {
    opcao = prompt("Selecione um dos métodos abaixo: " + 
        "\n1 - Área do triangulo: (base * altura / 2)" +
        "\n2 - Área do retângulo: (base * altura)" +
        "\n3 - Área do quadrado: (lado²)" + 
        "\n4 - Área do trapézio: (base maior + base menor) * altura / 2" +
        "\n5 - Área do círculo: pi * raio² (considere pi = 3,14)" +
        "\n6 - Sair"
    )

    switch (opcao) {
        case "1":
            Triangulo() // Retorna o calculo da área do Circulo
            break
        case "2":
            Retangulo() // Retorna o calculo da área do Retângulo
            break
        case "3":
            Quadrado() // Retorna o calculo da área do Quadrado
            break 
        case "4":
            Trapezio() // Retorna o calculo da área do Trapézio
            break
        case "5":
            Circulo() // Retorna o calculo da área do Circulo
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida")
    }

} while (opcao !== "6")