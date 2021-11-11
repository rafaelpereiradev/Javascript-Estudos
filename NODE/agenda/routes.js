const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login', loginController.indexLogin);
route.post('/login/register', loginController.register);
route.post('/login', loginController.login);

module.exports = route;
