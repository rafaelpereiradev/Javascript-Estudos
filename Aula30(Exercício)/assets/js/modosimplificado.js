const infoOnscreen = document.querySelector('.container');
const date = new Date();
const options = {
  dateStyle: 'full',
  timeStyle: 'short',
};
infoOnscreen.innerHTML = date.toLocaleDateString('pt-BR', options);
