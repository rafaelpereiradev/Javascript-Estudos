// const falaNome = require('./mod1').falaNome; //importanto o mod1.falaNome, aqui usamos require e não import como no es6

// // console.log(mod1); // tudo que informei no exports no arquivo mod1.

// console.log(falaNome());

//destructuring 

const {Pessoa} = require ('./mod1'); // quando usamos caminho, são módulos que criamos, agora quando não colocamos o caminho inteiro são do proprio node
const path = require('path');
const axios = require('axios');
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(respostadapagina => console.log(respostadapagina.data))
.catch(errodapagina =>console.log(errodapagina));



