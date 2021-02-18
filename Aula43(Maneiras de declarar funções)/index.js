//Função hoisting - de qualquer lugar, antes ou depois posso chamá-la, e ela será executada.
speakHi();
function speakHi() {
  console.log('hi');
}

// funções são objetos de primeira classe
//function expression
const iAmInfo = function () {
  console.log('Sou um dado');
};

//Posso criar uma função para executar outra função como parâmetro
function executeFunction(funcao) {
  funcao();
}
executeFunction(iAmInfo);

// Arrow Function

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto

const obj = {
  falar() {
    console.log('Estou falando');
  },
};
obj.falar();
