exports.paginaInicial = (req, res) => {
  res.send(`<form action="/" method="POST">
    Nome: <input type ="text" name = "nomedoinput"> 
    Outro Campo: <input type ="text" name = "outro input"> 
    <button>Enviar</button>
    </form>`);
};

exports.trataForm = (req, res) => {
  res.send('o Form do POST foi tratado');
};
