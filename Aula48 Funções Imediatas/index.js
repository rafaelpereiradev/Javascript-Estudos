// IIFE Imediately invoked function expression

// Essa função não tem nome, crio ela entre parênteses e em seguida chamo.
(function () {
  const nome = 'Rafael';
  console.log(nome);
})(); //<------- estou chamado ela no final com o parentêses., essa função não toca no escopo global de variáveis.
// tudo que crio nela pertence somente à ela. tbm posso passar os argumentos nesse parentêses.
const nome = 'Pamella';
console.log(nome);
