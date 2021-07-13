exports.meuMiddleware = (req, res, next) => {
  if (req.body.cliente) {
    console.log();
    console.log(`você inseriu ${req.body.cliente}`);
    console.log();
  }
  next();
};

exports.verificaCSRF = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
