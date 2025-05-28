let blocos = []
let opcao = ""
let blocoRemovido = ""

do {
    opcao = prompt("Quantidade de blocos na PUCPR: " + blocos.length + 
        "\nSelecione uma opção:" + 
        "\n1 - Adicionar um bloco" + 
        "\n2 - Listar os blocos" + 
        "\n3 - Remover o ultimo bloco" + 
        "\n4 - Encerrar"
    )

    switch (opcao) {
        case "1":
            const bloco = {}

            bloco.numero = parseFloat(prompt("Numero do bloco:"))
            bloco.nome = prompt("Nome do bloco:")
            bloco.materias = prompt("Matérias do bloco")
            bloco.maxAlunos = parseFloat(prompt("Máximo de estudantes no bloco"))

            const confirmar = confirm(
                "Deseja salvar esse bloco:" + 
                "\nNumero do bloco: " + bloco.numero + 
                "\nNome do bloco: " + bloco.nome + 
                "\nMatérias do bloco: " + bloco.materias + 
                "\nMáximo de alunos no bloco: " + bloco.maxAlunos
            )

            if (confirmar) {
                blocos.push(bloco)
            }
            break 
        case "2":
            for (let i = 0; i < blocos.length; i++) {
                alert("Informações." + 
                    "\nNúmero do bloco: " + blocos[i].numero +
                    "\nNome do bloco: " + blocos[i].nome + 
                    "\nMatérias do bloco: " + blocos[i].materias +
                    "\nMáximo de alunos no bloco: " + blocos[i].maxAlunos
                )
            }
            break
        case "3":
            blocoRemovido = blocos.pop()
            if (blocoRemovido) {
                alert("O bloco foi removido") 
            } else {
                alert("Sem blocos para serem removidos")
            }
            
            break
        case "4":
            alert("Saindo...")
            break
        default:
            alert("Opção invalida")
    }
} while (opcao !== "4")