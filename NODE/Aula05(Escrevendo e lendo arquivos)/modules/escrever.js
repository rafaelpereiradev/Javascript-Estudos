const fs = require('fs').promises;

// const caminhoArquivo =  path.resolve(__dirname, '..','teste.txt');
module.exports = (caminho, dados)=>{
  fs.writeFile(caminho, dados, { flag: 'w' });

}

// flag: w  --- apagar tudo que estiver dentro do arquivo, caso ele exista e escreve.
//flag: a -- append, ele adiciona ao arquivo existente, nao quebra linha apenas adiciona, e nao apaga.
