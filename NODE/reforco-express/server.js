const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<form action="/" method="POST">
  Nome: <input type ="text" name = "nome"> 
  <button>Enviar</button>
  </form>`);
});
app.post('/', (req, res) => {
  res.send('Recwbido o Formulário via POST');
});

app.get('/contato', (req, res) => {
  res.send('Obrigadoo por entrar em contato...');
});

app.listen(3000, () => {
  console.log('acesse  http://localhost:3000');
});
