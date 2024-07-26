const primeiroNome = prompt("Informe o primeiro nome do recruta: ")
const sobreNome = prompt("Informe o sobre nome do recruta: ")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta? ")
const anoDeNascimento = prompt("Qual o ano de nascimento do recruta? ")

alert(
    "Recruta cadastrado com sucesso!" + 
    
    "\n\nNome completo: " + primeiroNome + " " + sobreNome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2024 - anoDeNascimento)
)

    
