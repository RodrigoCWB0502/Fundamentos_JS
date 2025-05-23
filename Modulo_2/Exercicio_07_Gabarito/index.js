{/*
// Exercicio 01

// Cria as váriaveis
const filaDeEspera = ["Matheus", "Marcos"]
let opcao = ""
let pacienteAtendido = ""

do {
    let pacientes = ""
    for (let i = 0; i < filaDeEspera.length; i++) {
        pacientes += (i + 1) + "° - " + filaDeEspera[i] + "\n"
    }
    opcao = prompt("Fila de espera: " + "\n" + 
        pacientes + 
        "\n Escolha uma opção: " + 
        "\n 1 - Novo Paciente" + 
        "\n 2 - Consultar Paciente" + 
        "\n 3 - Sair"
    )

    switch (opcao) {
        case "1":
            filaDeEspera.push(prompt("Insira o nome do paciente:")) // Adiociona um elemento como ultimo na fila
            alert("Paciente adicionado!")
            break
        case "2":
            pacienteAtendido = filaDeEspera.shift() // Remove o primeiro da fila
            if (filaDeEspera > 0) { // Se tiver um valor na fila de espera, ele atende o paciente
                alert("Paciente " + pacienteAtendido + " foi atendido.") // retorna o nome do paciente que foi atendido
            } else { // Se não tiver pacientes na fila, ele alerta que não tem paciente na fila
                alert("Sem pacientes na fila de espera")
            }
            break
        case "3":
            alert("Saindo...")
            break
        default: 
            alert("Opção inválida.")
    }
} while (opcao !== "3")
*/}

// Exercicio 02

// Definindo as váriaveis
const baralho = ["Ás de ouros", "Sete de copas", "Rei de paus", "Três de espadas"]
let opcao = ""
let puxarCarta = ""

do {
    let cartas = ""
    for (let i = 0; i < baralho.length; i++) {
        cartas += (i + 1) + "° - " + baralho[i] + "\n"
    }
    opcao = prompt("Essas são as cartas no baralho: \n" + cartas + 
        "\n Selecione uma opção: " +
        "\n 1 - Adicionar uma carta" + 
        "\n 2 - Puxar uma carta do topo" +
        "\n 3 - Sair"
    )

    switch (opcao) {
        case "1":
            baralho.push(prompt("Insira a carta a ser adicionada: ")) // Insere uma carta ao topo do baralho
            alert("Carta adicionada ao topo do baralho")
            break
        case "2":
            puxarCarta = baralho.pop() // Remove a carta do topo do baralho
            if (puxarCarta) { // se tiver um valor no array ele remove
                alert("A carta " + puxarCarta + " foi removida do baralho")
            } else { // Se não tiver nada no array ele retorna que não tem cartas na pilha
                alert("Sem cartas na pilha")
            }
            break
        case "3": 
            alert("Saindo...")
            break
        default:
            alert("Opção invalida.")
    }

} while (opcao !== "3")