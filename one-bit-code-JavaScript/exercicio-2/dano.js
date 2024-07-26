const atacante = prompt("Qual o nome do personagem atacante? ")
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque? "))

const defensor = prompt("Qual é o nome do persogaem defensor? ")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui: "))
const poderDefesa = parseFloat(prompt("Qual o seu poder de defesa? "))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDefesa
} else if (poderDeAtaque > poderDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDefesa + "\nPossui escudo: " + possuiEscudo
)




