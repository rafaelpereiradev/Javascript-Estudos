function dataCerta(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando uma estância de Date');
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digite',
    hour12: false,
  });
}

try {
  const data = new Date('10-10-2002');
  const hora = dataCerta(data);
  console.log(data);
} catch (err) {
  console.log('Data no formato inválido');
} finally {
  console.log('Tenha um bom dia');
}
