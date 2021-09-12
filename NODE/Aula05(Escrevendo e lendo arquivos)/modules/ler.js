const fs = require('fs').promises;

// const caminhoArquivo =  path.resolve(__dirname, '..','teste.txt');
module.exports = (caminho) => fs.readFile(caminho, 'utf-8');
