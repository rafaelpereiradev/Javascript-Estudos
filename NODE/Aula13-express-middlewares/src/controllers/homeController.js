exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataForm = (req, res) => {
  res.send(req.body);
};
