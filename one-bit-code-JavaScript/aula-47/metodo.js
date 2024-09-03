let pessoa = {
    nome: "Sergio",
    idade: 45,
    dizerOla() {
        console.log("Olá, mundo" + "\n" + this.nome) // this aponta para o objeto
    }
}

console.log(pessoa)
pessoa.dizerOla()