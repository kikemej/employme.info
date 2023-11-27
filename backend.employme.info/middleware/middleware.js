const logRequest = (req, res, next) => {
    console.log(`Solicitud ${req.method} a ${req.path}`);
    next();
  };
  
  // Agrega aquí otros middlewares si los necesitas
  
  module.exports = {
    logRequest,
  };
  