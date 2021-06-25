const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // para entender o body, vindo do post

app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome: <input type ="text" name = "nomedoinput"> 
  Outro Campo: <input type ="text" name = "outro input"> 
  <button>Enviar</button>
  </form>`);
});

app.get('/testes/:idusuarios?/', (req, res) => {
  // colocando o interrogação, ele permite acessar a pagina mesmo em branco
  console.log(req.params); // params, é quando usa :nomeparametro  ex... /testes/123  <- parametro
  console.log(req.query); //query é usando query strings, ex... ?nome=rafael&sobrenome=souza
  // res.send(req.params);
  res.send(req.query);
});

app.post('/', (req, res) => {
  //post vindo do formulário, que renderizamos no get,
  res.send(
    `o que acabamos de escrever no input do formulário foi : ${req.body.nomedoinput}` //devemos indicar aqui o nome do input do form
  );
  console.log(req.body); // pegando o nome do inout como chave do objeto e o valor é o que coloquei no input
});

app.listen(3000, () => {
  console.log('acesse  http://localhost:3000');
});
