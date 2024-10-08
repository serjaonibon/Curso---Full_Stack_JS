function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Informa a base do triângulo: "))
    const altura = parseFloat(prompt("Informe a altura do triângulo: "))
    return base * altura / 2
}

function calcularAreaRetangulo () {
    const base = parseFloat(prompt("Informa a base do retângulo: "))
    const altura = parseFloat(prompt("Informe a altura do retângulo: "))
    return base * altura
}

function calcularAreaQuadrado () {
    const lado = parseFloat(prompt("Informe o lado do quadrado: "))
    return lado * lado
}

function calcularAreaTrapezio () {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
    const altura = prompt("Informe a altura do trapézio: ")
    return(baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo () {
    const raio = parseFloat(prompt("Informe o raios do circulo: "))
    return(3.14 * raio *raio)
}

function exibirMenu () {
    return prompt (
        "Calculadora geométrica" + "\n" +
        "1. Calcular área do triângulo" + "\n" +
        "2. Calcular área do retângulo" + "\n" +
        "3. Calcular área do quadrado" + "\n" +
        "4. Calcuular área do trapézio" + "\n" +
        "5. Calcular área do círculo" + "\n" +
        "6. Sair" + "\n" 
    )
}

function executar () {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo ()
                break
            case "2":
                resultado = calcularAreaRetangulo ()
                break
            case "3":
                resultado = calcularAreaQuadrado ()
                break
            case "4":
                resultado = calcularAreaTrapezio ()
                break
            case "5":
                resultado = calcularAreaCirculo ()
                break    
            case "6":
                alert("Saindo ...")
            default:
                alert("Opção inválida!")

        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

    } while (opcao !== "6")
}

executar()