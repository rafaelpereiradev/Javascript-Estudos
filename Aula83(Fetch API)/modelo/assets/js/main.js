
document.addEventListener('click', event => {
    const elemento = event.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        carregaPagina(elemento);
    }
})

async function carregaPagina(elemento) {
    try {
        const href = elemento.getAttribute('href');
        const response = await fetch(href);
        if (response.status !== 200) throw new Error('Erro 404')
        const html = await response.text();
        carregaResultado(html)
    } catch (err) {
        console.log(err);
    }

}
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('Erro 404');
        return resposta.text();


    }).then(html => console.log(html))
    .catch(e => console.error(e));