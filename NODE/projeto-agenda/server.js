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

const session = require('express-session'); // salvar cokkie com um id, no pc do cliente e toda vez que conectar ele vai verificar
const MongoStore = require('connect-mongo'); // é pra falar que sessoes serao salvas no banco e dados e nao no pc.
const flash = require('connect-flash'); // mensagens autodestrtutivas, msgs que depois de ler elas somem. bom para msg de erros etc...elas sao salvas em sessoes, ou seja vai pro banco tbm

const routes = require('./routes');
const path = require('path');
const helmet = require('helmet'); // recomendado pelo expresss, deixa a aplicação mais segura.
const {
  meuMiddleware,
  verificaCSRF,
  csrfMiddleware,
} = require('./src/middlewares/middlewareGlobal'); // meus Middlewares, coisas que executam no meio de alguma requisição, antes ou depois da resposta
const csrf = require('csurf'); // tokens para formulários, ou seja, sempre cria um id diferente. mt importante

app.use(helmet());

app.use(express.urlencoded({ extended: true })); // para entender o body, vindo do post
app.use(express.json()); // parecido com urlencoded, mas utiliza JSON para entender
app.use(express.static(path.resolve(__dirname, 'public'))); // todos arquivos estáticos da nossa aplicação - css,imagens,javascript
app.set('views', path.resolve(__dirname, 'src', 'views')); //setando o caminho absoluto para a pasta views
app.set('view engine', 'ejs'); // setando a engine

const sessionOptions = session({
  //configurando sessoes, guardando sessoes etc...
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
app.use(csrf());
app.use(meuMiddleware, verificaCSRF, csrfMiddleware);
app.use(routes); //utilize o arquivo routes.

app.on('bd connected', () => {
  // app.on('nome do sinal') <- aguarda se a msg antes definida ja existe.
  app.listen(3000, () => {
    console.log('acesse  http://localhost:3000');
  });
});
