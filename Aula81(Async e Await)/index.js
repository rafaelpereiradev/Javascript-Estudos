// Promise.all   Promise.race  Promise.resolve  Promise.reject
function rand(min, max) { //Só uso para ramdomizar o tempo.
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { //primeiro parâmetro é se for OK, segundo se der erro.
        setTimeout(() => {//faça isso de acordo com o tempo.
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            }
            resolve(msg.toUpperCase() + ' -Passei na promise');
            return;
            // Ambos viram uma função, que só recebe um argumento. retorna a mensagem
        }, tempo);
    });
}


// 
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase2', rand(1, 6));
// }).then(fase => {
//     console.log(fase);
//     return esperaAi('Fase3', rand(1, 1));
// }).then(fase => {
//     console.log(fase);
// }).catch(error => {
//     console.log(error);
// });

async function executa() {
    try {
        const fase1 = esperaAi('Fase1', 100);
        console.log(fase1);
        setTimeout(function () {
            console.log('Essa promisse estava pendente', fase1)
        }, 1100)
        const fase2 = await esperaAi('Fase2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase3', rand());
        console.log(fase3);
        console.log('terminamos na fase ', fase3);

    } catch (e) {
        console.log(e);
    }

}

executa();


// estados da promessa 
// pending - estado incial, quando manda executar
//fullfilled - resolvida
//rejected - rejeitada
//