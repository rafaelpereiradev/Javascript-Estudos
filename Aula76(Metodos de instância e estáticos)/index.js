class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }
  //métodos de instância
  aumentarVolume(){
    this.volume+=2;
  }
  //métodos de instância
  diminuirVolume(){
    this.volume-=2;
  }
  //método estático não é atrelado a instância, mas sim a classe PAI
  static trocaPilha(){ // não consigo acessar dados da instância.
    console.log('Ok, vou trocar')

  }
}
const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
console.log(c1)
ControleRemoto.trocaPilha(); //atrelado à classe Pai
