const elements = [
  //////// 0
  { tag: 'p', text: 'Frase 1' }, //0
  { tag: 'div', text: 'Frase 2' }, //1
  { tag: 'footer', text: 'Frase3' }, //2
  { tag: 'section', text: 'Frase 4' }, //3
];

const insertJS = document.querySelector('#insertJS');

for (i = 0; i < elements.length; i++) {
  const { tag, text } = elements[i];

  insertJS.innerHTML += `<${tag}> ${text} </${tag}>`;
}
