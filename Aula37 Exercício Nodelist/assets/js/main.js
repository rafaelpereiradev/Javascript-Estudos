const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#ffffff';
}
