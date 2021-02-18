
//Utilizando FETCH API
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementos(json));



//=====Utilizando AXIOS =======// Ele faz a mesma coisa, porém é menos verboso, praticamente um framwork AJUDA DEMAISS
axios('pessoas.json').then(arquivo => carregaElementos(arquivo.data));

function carregaElementos(json) {

    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = pessoa.nome;

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        // td = document.createElement('td');
        // td.innerHTML = pessoa.salario;
        // tr.appendChild(td);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

