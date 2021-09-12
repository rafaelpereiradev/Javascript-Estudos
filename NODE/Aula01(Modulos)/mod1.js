// const nome = 'Rafael';
// const sobrenome = 'Pereira';

// const falaNome = () => `${nome} ${sobrenome}`

// //maneira mais extensa
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falanome = falaNome;


// //maneira simplificada sem module
// exports.nome = nome;
// exports.SOBRENOME = sobrenome; //Posso dar qualquer nome à chave, letra maiúcula minúscula também
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'qualquer coisa'; //pode usar tbm this, menos utilizado.

// console.log(module.exports)

class Pessoa {
  constructor(nome){
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;