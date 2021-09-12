const fs = require('fs').promises; // com esse promises ele aguarda resolver as promessas ou seja pendencias,(ler arquivos);
const path = require('path');

async function lerDiretorio(rootDir) {
  rootDir = rootDir || path.resolve(__dirname); //se existir rootDir blz, se não pega o caminho via path.
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}
async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (stats.isDirectory()) {
      lerDiretorio(fileFullPath);
      continue; //continue mesmo se der erro, continue iterando
    }
    if (/\.git/g.test(fileFullPath)) continue; // não ver os arquivos .git
    if (/node_modules/g.test(fileFullPath)) continue; // não ver os arquivos pastas node_modules
    console.log(fileFullPath, stats.isDirectory());
  }
}
lerDiretorio('/home/rafaelsouza/Desktop/Javascript Moderno Udemy/NODE/');
