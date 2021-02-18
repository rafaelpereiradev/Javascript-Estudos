function numberBig(a, b) {
  if (a > b) {
    return console.log(a);
  } else if (b > a) {
    return console.log(b);
  } else {
    console.log('Os números são iguais ' + a, b);
  }
}
numberBig(5, 2);
