const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce (function(textoFinal, vaga, indice) {
        // 1. nome, (x candidatos)
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos) \n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")

    const confirmacao = confirm(
        "Deseja criar uma vaga com essas informações? " + "\n" +
        "Nome: " + nome + "\n"  +
        "Descrição: " + descricao + "\n" +
        "Data Limite: "
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }

}

function exibirVaga () {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice + "\n" +
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data Limite: " + vaga.dataLimite + "\n" +
        "Quantodade de candidatos: " + vaga.candidatos.length + "\n" +
        "Candidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato () {
    const candidato = prompt("Informe o nome do(a) candidato(a): ")
    const indice = prompt("Informe o íncice da vaga para a qual o(a) candidato(a) deseja se inscrever? ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada")
    }
}

function excluirVaga(){
    const indice = prompt("Informe o índice da vaga que deseja excluir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" + 
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data limite: " + vaga.dataLimite

    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" + "\n" +
        "Escolh uma das opções: " + "\n" +
        "1. Listar vagas disponíveis " + "\n" +
        "2. Criar uma nova vaga " + "\n" +
        "3. Visualizar uma vaga " + "\n" +
        "4. Inscrever um(a) cadidato(a)" + "\n" +
        "5. Excluir uma vaga" + "\n" +
        "6. Sair" + "\n" 
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu

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
                alert("Saindo ...")
            default:
                alert("Opção inválida.")   
        }
    } while (opcao !== 6)

}

executar()
