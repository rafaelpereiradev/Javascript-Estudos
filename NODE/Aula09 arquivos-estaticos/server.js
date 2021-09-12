const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const stringDeConexao = 'mongodb+srv://estudojs:conexaoatlas@estudojs.u1evk.mongodb.net/tarefasDB?retryWrites=true&w=majority';
mongoose.connect(stringDeConexao);



const routes =  require('./routes');
const path = require('path');
const { midlewareGlobal } = require('./src/middleares/middleware');
const exp = require('constants');


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


//Nossos próprios Middlewares

app.use(midlewareGlobal);
app.use(routes);

app.listen(3000,()=>{
  console.log('Acesse http://localhost:3000');
})