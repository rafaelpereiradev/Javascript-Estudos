const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//   req.session = { nome: 'Rafael', senha: 'qwe@123' };
//   console.log();
//   console.log('Passei pelo Middleware');
//   console.log();
//   next();
// }

//ROTAS PAGINA INICIAL
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataForm);

//ROTAS PAGINA CONTATO
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
