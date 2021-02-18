function rand(min, max) { //Só uso para ramdomizar o tempo.
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //primeiro parâmetro é se for OK, segundo se der erro.
        setTimeout(() => {//faça isso de acordo com o tempo.
            if (typeof msg !== 'string') reject('BAD VALUE');
            resolve(msg); // Ambos viram uma função, que só recebe um argumento. retorna a mensagem
        }, tempo);
    });


}

esperaAi('Frase1', rand(1, 3))
    .then(resposta => { //.then() recebe o resolve.
        console.log(resposta);
        return esperaAi(1, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase3', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    })
    .catch(error => {
        console.log(error);
    });         //Sempre que utilizamos resolve, utiliza-se then() reject , ou seja caso seja o não esperado é catch().