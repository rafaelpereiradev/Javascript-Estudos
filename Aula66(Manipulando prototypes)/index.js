//Raiz de todos :  Object.prototype
const objA = {
  chaveA: 'A',
};

const objB = new Object();
objB.chaveB = 'B';
Object.setPrototypeOf(objB, objA);

const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objC, objA);

console.log(objC.chaveA);
