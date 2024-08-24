/*

const palavra = prompt("Informe uma palavra: ")
let palavraInvertida = ""
const palavra1 = palavra.toLocaleUpperCase()
let palavraInvertida1 = palavraInvertida.toLocaleUpperCase()

for(let i = palavra1.length -1; i >=0; i--){
    palavraInvertida1 += palavra1[i]
}

if (palavra1 === palavraInvertida1) {
    alert(palavra1 + " é um palíndromo!")
} else {
    alert(
        palavra1 + " não é um palíndromo!" + "\n\n"  +
        palavra1 + "!==" + palavraInvertida1
    )
}


*/

const palavra = prompt("Informe uma palavra: ").toLocaleUpperCase()
let palavraInvertida = "".toLocaleUpperCase()

for(let i = palavra.length -1; i >=0; i--) {
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
} else {
    alert(
        palavra + " não é um palíndromo!" + "\n\n"  +
        palavra + "!==" + palavraInvertida
    )
}