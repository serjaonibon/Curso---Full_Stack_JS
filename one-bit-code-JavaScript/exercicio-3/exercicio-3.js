
var medida = Number(prompt("Informe o valor em metro(s) a ser convertido: "))
var mm = medida * 1000
var cm = medida * 100
var dm = medida * 10
var dam = medida / 10
var hm = medida /100
var km = medida /1000  
const opcao = prompt(
    "Você deseja converter " + medida + " metro(s) para qual medida? " + "\n" +
    "1. Quilômetro" + "\n" +
    "2. Hectômetro" + "\n" +
    "3. Decâmetro" + "\n" +
    "4. Decímetro" + "\n" +
    "5. Centímetro" + "\n" +
    "6. Milímetro" 

)

switch (opcao) {
    case "1" :
        alert("O resultado será " + Number(km) + " quilometro(s)")
        break
    case "2" :
        alert("O resultado será " + Number(hm) + " hectoômetro(s)")
        break
    case "3" :
        alert("O resultado será " + Number(dam) + " decâmetro(s)")
        break
    case "4" :
        alert("O resultado será " + Number(dm) + " decímetro(s)")
        break
    case "5" :
        alert("O resultado será " + Number(cm) + " centímetro(s)")
        break
    case "6" :
        alert("O resultado será " + Number(mm) + " milímetro(s)")
        break
    default:
        alert("Finalizando")

}



