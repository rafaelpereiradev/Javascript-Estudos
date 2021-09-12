require('dotenv').config(); // iniciando o dotenv no projeto, desta forma, consigo usar as variaveis no arquivo .env

const express = require('express');
const app = express();
// Iniciando a conexão com a base de dados
const mongoose = require('mongoose');

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit('bd connected'); // se der certo, emite o sinal desejado.
  })
  .catch((e) => console.log(e)); // cath é se der erro na conexão.

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { meuMiddleware } = require('./src/middlewares/middlewareGlobal');
const e = require('express');

app.use(express.urlencoded({ extended: true })); // para entender o body, vindo do post
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views')); //setando o caminho absoluto para a pasta views
app.set('view engine', 'ejs'); // setando a engine

const sessionOptions = session({
  secret: 'rtyuiqkjdhguyiuo',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    //         mlseg   seg  min  hr   dias
    maxAge: 1000 * 60 * 60 * 24 * 7, // tempo que este cookie vai ficar válido.
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());
app.use(meuMiddleware);
app.use(routes); //utilize o arquivo routes.

app.on('bd connected', () => {
  // app.on('nome do sinal') <- aguarda se a msg antes definida ja existe.
  app.listen(3000, () => {
    console.log('acesse  http://localhost:3000');
  });
});
