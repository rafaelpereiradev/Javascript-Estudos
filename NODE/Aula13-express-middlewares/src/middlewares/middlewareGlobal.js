exports.meuMiddleware = (req, res, next) => {
  if (req.body.cliente) {
    console.log();
    console.log(`você inseriu ${req.body.cliente}`);
    console.log();
  }
  next();
};
