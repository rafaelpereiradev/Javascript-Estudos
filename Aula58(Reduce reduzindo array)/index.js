//reduce reduz o array em um único elemento, exemplo, pode somar todos os numeros de um array.
//

const numeros = [1, 2, 3, 4, 5, 6, 7, 80, 25, 36, 41];
//reduce recebe acumulador,valores,indice,arrayoriginal, além disso pode definir o valor inicial do meu acumulador
const somaNumeros = numeros.reduce(
  (acumulador, valores, indice, arrayoriginal) => {
    acumulador += valores;
    return acumulador;
  },
  0
); // <- Acumulador começando com zero se eu quiser, se eu tirar o 0 ele comçea com o valor do primeiro indice
console.log(somaNumeros);
