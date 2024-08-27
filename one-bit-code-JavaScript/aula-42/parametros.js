function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

// dobro(5)

function dizerOla(nome = "Mundo") {
  alert("Olá, " + nome + "!");
}

// dizerOla("Serjão")
// dizerOla()

function soma(a, b, c, d, e) {
  alert("O resultado da soma é " + (a + b + c + d + e));
}

// soma(1, 5, 2, 3, 10)

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, // mesmo que  " nome: nome"
    email, // mesmo que  " email: email"
    senha, // mesmo que  " senha: senha"
    tipo // mesmo que  " tipo: tipo"
  };
  console.log(usuario);
}


function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    
}
muitosParametros(nome, telefone, endereco, aniversario, email, senha)


function objetoComoParametro(nome, telefone, endereco, aniversario, email, senha) {
    
}

