// caiuse.com   --> site onde posso ver o que os navegadores aceitam ou não do ecmascript

//Babel -> compilador e tradutor. site: babeljs.io   ele compatibiliza o código para os navegadores antigos entenderem js mais atual
/*instalação Babel
npm install --save-dev @babel/cli @babel/preset-env @babel/core

npx babel index.js -o bundle.js --presets=@babel/env


fazer o npm assistir mudanças com babel, ir na pasta package-lock.json:
"scripts": {
    "babel": "babel ./index.js -o ./bundle.js --presets=@babel/env -w"


em seguida executar  npm run babel
*/


const nome = 'Rafael';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);
