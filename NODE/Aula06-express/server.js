const express = require('express'); // importando express
const app = express(); // iniciando uma instância do express

//         Criar   Ler  Atualizar Apagar
//           |      |      |        |
//CRUD --- CREATE, READ, UPDATE, DELETE
//           |      |      |        |
//OPERAÇÕES POST    GET    PUT     DELETE

app.get('/', (requisicao, resposta) => {
  //tratamos a requisição na raiz do site
  resposta.send(`
  <form action="/" method ="POST">
  Nome: <input type "text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.post('/', (requisicao, resposta) => {
  resposta.send('Recebi o Formulário!');
});

app.get('/contato', (requisicao, resposta) => {
  resposta.send('Obrigado por entrar em contato conosco!');
});
app.listen(3000, () => {
  console.log('Acesse: http://localhost:3000');
  console.log('Servidor rodando na porta 3000 ...');
});
