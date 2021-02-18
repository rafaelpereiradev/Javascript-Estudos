// return
//retorna um valor
//termina a função

function soma(a, b) {
  return a + b;
}
//o console.log exibe o que eu quero mostrar, ja o return pode me retornar o valor e eu posso fazer algo com este valor

function criaMultiplicacao(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}
const duplica = criaMultiplicacao(2);
const triplica = criaMultiplicacao(3);
const quadriplica = criaMultiplicacao(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
