//Escopo léxico as funções buscam a variável nos izinhos e continuamente subindo até encontrar ex:

const nome = 'Rafael'; //não esta dentro da função falaNome porém ela enxerga
function falaNome() {
  console.log(nome);
}
falaNome();
//Porém se houvesse a variavel nome dentro da função, o valor seria o de dentro d FUNÇÃO.
