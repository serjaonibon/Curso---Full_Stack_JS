

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)
// adicionar elementos
// push -> adiciona elementos no final do array

arr.push("Boromir")
arr.push("Boromir")
arr.push("Boromir")
arr.push("Boromir")

console.log(arr)

//unshift adiciona elementos no início do array

arr.unshift("Nibon")
console.log(arr)

//Remove elementos
// pop

arr.pop("Boromir")
arr.pop("Boromir")
arr.pop("Boromir")
arr.pop("Boromir")

console.log(arr)

const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift -> remove elementos do início do array

let primeiroElemento = arr.shift()
console.log(arr)

// pesquisar por um elemento
// includes

const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf -> Informa o índice onde o elemento está inserido
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar e concatenar arrays
 // slice

 const hobbits = arr.slice(0, 4)
 console.log(hobbits)

 const outros = arr.slice(-4)
 console.log(outros)

 // concat -> concatena elementos de vários arrays em um array

 const sociedade = hobbits.concat(outros, "Serjão")
 console.log(sociedade)

 // substituição dos elementos
// splice

 const elementosRemovidos = sociedade.splice(indice, 1, "Serjão, o lindo")
 console.log(sociedade)
 console.log(elementosRemovidos)

 // Iterar sobre os elementos do array

 for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
 }





