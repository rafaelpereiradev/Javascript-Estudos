//const pessoa1 = []; // isso é um array

//Isto é um objeto.
//const pessoa1 = {
//    nome: 'Luiz',
////    sobrenome: 'Miranda',
//    idade: 23
//}; 

//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);
//console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade){

    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Rafael', 'Pereira', 26);
const pessoa2 = criaPessoa('Pamella', 'Braga', 21);
const pessoa3 = criaPessoa('Creuza', 'Braga', 50);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);