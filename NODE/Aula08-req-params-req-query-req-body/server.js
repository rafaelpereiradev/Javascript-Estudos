const express = require('express'); // importando express
const app = express(); // iniciando uma instância do express

// http://facebook.com/profiles/5 -> url params

//                                  chave    valor   caso tenha mais, adiciona p & comercial
// http://facebook.com/profiles/5?campanha=googleads -> query strings

app.get('/', (requisicao, resposta) => {
  //tratamos a requisição na raiz do site
  resposta.send(` 
  <form action="/" method ="POST">
  Nome  : <input type "text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios', (requisicao, resposta) => {
  console.log(requisicao.params); // o que esta sendo solicitado nos parametros
  resposta.send(requisicao.params.idUsuarios);
});

app.post('/', (requisicao, resposta) => {
  resposta.send('Recebi o Formulário!');
});

app.listen(3001, () => {
  console.log('Acesse: http://localhost:3001');
  console.log('Servidor rodando na porta 3001 ...');
});
