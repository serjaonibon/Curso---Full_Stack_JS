const medida = prompt("Insira uma medida em metros: ");

const unidade = prompt(
  "Para qual unidade de medida deseja converter? " +
    "\n" +
    "1.milimetros (mm)" +
    "\n" +
    "2.centímetros (cm)" +
    "\n" +
    "3.decímetros (dm)" +
    "\n" +
    "4.decâmetros (dam)" +
    "\n" +
    "5.hectômetros (hm)" +
    "\n" +
    "6.quilômetros (km)" +
    "\n"
);

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    break
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "mm")
    break
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
    break
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
    break
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    break
  default:
    alert("Opção inválida!");
}
