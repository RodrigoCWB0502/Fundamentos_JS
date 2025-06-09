const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
        // Exibir indice, nome e quantia de candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga () {
    const nome = prompt("Informe o nome para a vaga")
    const descricao = prompt("Informe uma descrição para a vaga")
    const dataLimite = prompt("Informe a data limite (dd/mm/aaaa) para a vaga")

    const confirma = confirm(
        "Deseja ciar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirma) {
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")

    // Verifica se existe
    if (indice >= vagas.length || indice < 0) {
        alert("Indice inválido")
        return // Como se fosse um Break (Caso o usuario digite um indice que não exite)
    } 

    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga n° " + indice + 
        "\nNome: " + vaga.nome + 
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato() {
    const candidato = prompt("Indorme o nome do(a) candidato(a)")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever")
    const vaga = vagas[indice]

    const confirma = confirm(
        "Deseja inscrever o candidato: " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "Data limite: " + vaga.dataLimite
    )

    if (confirma) {
        vaga.candidatos.push(candidato)
        alert("Innscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmar = confirm(
        "Deseja inscrever o candidato: " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confirmar) {
        vagas.splice(indice, 1)
        alert("Vaga Excluida")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de vagas de emprego" + 
        "\n\nEscolha uma das opções" + 
        "\n1. Listar vagas disponíveis" + 
        "\n2. Criar uma nova vaga" + 
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir um(a) candidato(a)" + 
        "\n6. Sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida")
        }
    } while (opcao !== "6")
}

executar()