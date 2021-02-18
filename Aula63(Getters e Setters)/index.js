function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    get: function () {
      //quando consultar
      return estoque;
    },
    set: function (valor) {
      //quando tentar alterar
      if (typeof valor !== 'number') {
        throw new TypeError('Mensagem de erro');
      }
      return;
    },
  });
}

const p1 = new Produto('Camiseta', 20, 33);
p1.estoque = 'dd';
console.log(p1.estoque);
