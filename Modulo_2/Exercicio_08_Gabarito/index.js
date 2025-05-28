// Definindo as variáveis
let imoveis = [] // Array com os nomes
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
        "\nEscolha uma opção:" + 
        "\n1. Novo imóvel" + 
        "\n2. Listar imóveis" + 
        "\n3. Sair")

    switch (opcao) {
        case "1":
            const imovel = {} // Cria o objeto imovel
            
            // Informações sobre o imóvel
            imovel.nome = prompt("Nome do imóvel:")
            imovel.nomeProprietario = prompt("Insira o nome do proprietário:")
            imovel.quartos = parseFloat(prompt("Insira o numero de quartos:"))
            imovel.banheiro = parseFloat(prompt("Insira a quantidade de banheiros:"))
            imovel.garagem = prompt("Possuí garagem?")

            // Gera as informações na tela, se confirma ele fica salvo
            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nNome do imóvel: " + imovel.nome + 
                "\nProprietário: " + imovel.nomeProprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiro +
                "\nPossui Garagem? " + imovel.garagem
              )
              
              // Insere no array imoveis (primeira variável)
              if (confirma) {
                imoveis.push(imovel)
              }
            break
        case "2":
            // Exibe os imoveis pelo indice
            for (i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel: " + imoveis[i].nome +
                    "\nProprietário: " + imoveis[i].nomeProprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossui Garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            // Encerra o programa
            alert("Saindo...")
            break
        default:
            alert("Opção inválida")
    }

} while (opcao !== "3")