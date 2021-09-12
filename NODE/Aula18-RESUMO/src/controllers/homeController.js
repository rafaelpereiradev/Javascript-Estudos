exports.paginaInicial = (req, res) => {
  // const sess = (req.session.usuario = {
  //   nome: 'rafael.pereiradev',
  //   logado: true,
  // }); //com o app usando sseion no arquivo server.js , temos acesso ao req.session
  // console.log(sess);
  res.render('index');
};

exports.trataForm = (req, res) => {
  res.send(req.body);
};
