const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo ao cadastro de imóveis!" + "\n" +
        "Total de imóveis: " + imoveis.length + "\n" + "\n" +
        "Escolha uma opçõa: " + "\n" + 
        "1. Novo imóvel" + "\n" + 
        "2. Listar imóveis" + "\n" + 
        "3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietario do imóvel: ")
            imovel.quartos = prompt("Quantos quartos possui o  imóvel? ")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel? ")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmacao = confirm (
                "Salvar este imóvel? " + "\n" +
                "Proprietário: " + imovel.proprietario + "\n" +
                "Quartos: " + imovel.quartos + "\n" +
                "Banheiro: " + imovel.banheiros + "\n" +
                "Possui garagem? " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            } else{
                alert("Voltando ao menu.")
            }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i ++) {
                alert(
                    "Imóvel " + (i + 1) + "\n" +
                    "Proprietário: " + imoveis[i].proprietario + "\n" +
                    "Quartos: " + imoveis[i].quartos + "\n" +
                    "Banheiros: " + imoveis[i].banheiros + "\n" +
                    "Possui garagem? " + imoveis[i].garagem 

                )
            }
            break
        case "3":
            alert("Encerrando ...")
            break
        default:
            alert("Opção inválida!")
            break
    }

} while (opcao!==3)