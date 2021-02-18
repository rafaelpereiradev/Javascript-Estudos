let num1 = 10.578908465;
let num2 = 2.5;

//num1 = num1.toString();//transforma em String permanente.
console.log(num1.toString()); //converte número em String e mostra
console.log(num1.toFixed(2)); // aredonda o numero e deixa apenas em 2 casas após a vírgula
console.log(num1.toString(2)) // Binario
console.log(Number.isInteger(num1)); // testa se a variavel em parênteses é inteiro se sim retorna true, se não false.
console.log(Number.isNaN(num1)); //pergunta se a variavel é um NaN(Not a Number).
num1 = Number(num1.toFixed(2)) // sempre que for fazer contas com números flutuantes.
