const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [recebePrimeiro, recebeSegundo, recebeTerceiro, ...resto] = numeros;

console.log(recebePrimeiro, recebeSegundo, recebeTerceiro, resto[2]);
