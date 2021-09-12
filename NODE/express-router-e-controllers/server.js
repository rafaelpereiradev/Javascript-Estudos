const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true })); // para entender o body, vindo do post
app.use(routes); //utilize o arquivo routes.
app.listen(3000, () => {
  console.log('acesse  http://localhost:3000');
});
