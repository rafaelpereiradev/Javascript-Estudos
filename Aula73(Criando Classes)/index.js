class Pessoa{
  constructor(nome,sobrenome){ //constructor é um método default, que é usado para criarmos parâmetros, se quisermos.
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(){
    console.log(`${this.nome} está falando`)
  }
  
}
Pessoa.prototype.teste = function(){
  console.log(`${this.nome} setando prototype`)
}
const p1 = new Pessoa('Rafael', 'Pereira');
p1.teste()

