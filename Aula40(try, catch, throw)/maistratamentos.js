try {
  // console.log(a);
  try {
    console.log(b);
  } catch (err) {
    console.log(' erro de novo');
  }
} catch (err) {
  console.log('Tratando o erro anterior');
} finally {
  // independente do que ocorreu ele é executado
  console.log('FINALLY: sempre é executado se der erro ou não');
}
