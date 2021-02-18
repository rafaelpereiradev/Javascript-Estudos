const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2, [7, 8, 9], 'Rafael'); //utilizando o concant() resolve a concatenação
//Posso usar o spred operator para ficar um código mais limpo
const a3 = [...a1, ...a2, ...[7, 8, 9]]; //spread espalha os valores dos arrays anteriores no a3, o rest pega o resto, é mais para funções

console.log(a3);
