const nome = ['Rafael Pereira', 'Luiz Otavio'];

for (let valor of nome) {
  // quando usa-se for of, é retornado o valor, e não o índice do vetor,
  // se quer o índice, pode usar o for clássico ou for in.
  console.log(valor);
}

//O for in retorna indice ou chaves

console.log('#####################');

nome.forEach(function (valor, indice, arrayCompleto) {
  // o forEach é uma função nativa do javascript para vetor,
  // ele pega os valores no primeiro parâmetro, e no segundo ele retorna o indice da informação
  //e no terceiro o Array completo.
  console.log(valor, indice, arrayCompleto);
});
