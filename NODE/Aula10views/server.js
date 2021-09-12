const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true })); // para entender o body, vindo do post
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes); //utilize o arquivo routes.
app.listen(3000, () => {
  console.log('acesse  http://localhost:3000');
});
