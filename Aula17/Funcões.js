/*function saudacao(nome) {
    
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel); */

//function soma(x,y){
//const resultado = x + y;
//return resultado;
//depois de return dentro da função não vai executar nada mesmo que eu coloque

//}
//console.log(soma(2, 2));
//console.log(soma(3, 6));


//const raiz  = function(n){
 //   return n**0.5;

//};

//console.log(raiz(9));


//Utilizando o jeito mais atual de criar uma função mais moderno Arrow Function

const raiz = (n) =>{
    return n**0.5
};

console.log(raiz(25));