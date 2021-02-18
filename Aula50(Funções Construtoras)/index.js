// função construtora retorna objetos
//função fábrica  -> fabrica objetos

//construtora - Pessoa - CamelCase começa com letra Maiúscula... Pessoa(new)

// Essas funções são um molde, ou seja um modelo para criar objetos.

function Pessoa(nome, sobrenome) {
  this.nome = nome; //referencio a chave e valor com this
  this.sobrenome = sobrenome;
  this.metodo = () => {
    //funções devem ser criadas com this.nomedafunção = ()=>
    console.log(`${nome} ${sobrenome}`);
  };
}
const p1 = new Pessoa('Rafael', 'Pereira');
p1.metodo();
