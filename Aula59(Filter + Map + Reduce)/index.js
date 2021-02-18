//Retorne a soma do dobro de todos os pares
// -> Filtrar Pare
//->Dobrar os valores
//->Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 11, 15, 22, 27];

const pares = numeros
  .filter((valor, index) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumm, valor) => (acumm += valor));
console.log(pares);
