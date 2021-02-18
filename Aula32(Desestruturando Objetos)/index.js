const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Souza',
  idade: 26,
  endereco: {
    rua: 'Avenida João de Barro',
    numero: 313,
  },
};
// Atribuição via desestruturação
const {
  nome,
  sobrenome,
  idade,
  endereco: { rua, numero },
} = pessoa;
console.log(nome, sobrenome, idade, rua, numero);
