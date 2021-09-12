const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever'); //importando o module exports do arquivo escreve.js
const ler = require('./modules/ler');

// const pessoas = [
//   {
//     nome: 'Joao',
//   },
//   {
//     nome: 'Maria',
//   },
//   {
//     nome: 'Eduardo',
//   },
//   {
//     nome: 'Luiza',
//   },
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo,json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}
function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val.nome));// o obj e um array, estou iterando
}
leArquivo(caminhoArquivo);
