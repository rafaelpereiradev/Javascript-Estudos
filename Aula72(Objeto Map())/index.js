const pessoas = [
  {id:3, nome:'Luiz'},
  {id:2, nome:'Rafael'},
  {id:1, nome:'Pamella'},
]

const novasPessoas = new Map();

for (const pessoa of pessoas){
  const {id} = pessoa;//destructuring
  novasPessoas.set(id,{ ...pessoa});

}
console.log(novasPessoas.get(2)); // recebo todos os dados com as chaves, caso utilize get(), deve-se informar a chave.

