// For in - lê o índices do array ou chaves do objeto

const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Souza',
  idade: 26,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
