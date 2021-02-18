function ValidaCPF(cpfEnviado){
  Object.defineProperty(this,'cpfLimpo', {
    enumerable: true,
    get: function(){
      return cpfEnviado.replace(/\D+/g,'');
    
    }
  });
}

ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  return true;
}


const cpf = new ValidaCPF('416.502.848-70');
console.log(cpf.valida())