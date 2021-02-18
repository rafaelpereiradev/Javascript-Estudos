function* geradora1() {
  //função geradora tem asterisco depois da palavra function
  //Código qualquer...
  yield 'Valor 1';
  //Código qualquer...
  yield 'Valor 2';
  //Código qualquer...
  yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
