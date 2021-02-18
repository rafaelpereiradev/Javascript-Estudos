"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var nome = 'Rafael';
var obj = {
  nome: nome
};

var novoObj = _objectSpread({}, obj);

console.log(novoObj);
