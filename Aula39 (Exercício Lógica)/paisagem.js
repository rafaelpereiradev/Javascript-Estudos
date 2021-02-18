function orientationS(x, y) {
  let msg;
  x > y
    ? (msg = 'Paisagem')
    : x < y
    ? (msg = 'Retrato')
    : (msg = 'Lados Iguais');
  return msg;
}
console.log(orientationS(100, 40));
