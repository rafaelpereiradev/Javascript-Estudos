const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  fala() {
    console.log(`A minha idade atual � ${this.idade}`);
  },
  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade(); // chama o acent� com o incremento ++ e adiciona 1 à idade.
pessoa1.fala();
