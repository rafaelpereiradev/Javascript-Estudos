export const nome = 'Rafael'; // usando export na criação, estou criando e ja exportando diretamente.
export const sobrenome = 'Souza';
export const idade = 27;

export default function soma(x, y) { //utilizando a palavra default, caso eu importe sem especificar, erá esta função chamada.
    return x + y;
}

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }
// export { nome as nome2, sobrenome, idade, soma }; exportando no final