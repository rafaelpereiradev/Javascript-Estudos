exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataForm = (req, res) => {
  res.send('o Form do POST foi tratado');
};
