let varA = 'A'
let varB = 'B'
let varC = 'C'
let varX = ''

varX = varA;
varA = varB;
varB = varC;
varC = varX;

console.log(varA, varB, varC);
