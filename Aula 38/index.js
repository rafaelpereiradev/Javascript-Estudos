const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    continue; /// ele começa no 1, pula o 2 e continua no 3
  }
  console.log(numero);
}
// se usarmos o break ele para.
