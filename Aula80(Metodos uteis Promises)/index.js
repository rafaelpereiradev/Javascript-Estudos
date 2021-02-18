// Promise.all   Promise.race  Promise.resolve  Promise.reject
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

const promises = [
    'Primeiro valor',
    esperaAi('Promise1', 3000),
    esperaAi('Promise2', 1000),
    esperaAi('Promise3', 2000),
    'Outro Valor...'
];


Promise.race(promises).then(valor => { // se uma das promessas for false, todas sertão rejeitadas, Promise.race - executa a promise mais proxima, ou seja a que retorna primeiro
    console.log(valor);
}).catch(erro => {
    console.log(erro);
});

