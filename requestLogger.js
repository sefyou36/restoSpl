const fs = require('fs');

function requestLogger(req, res, next) {
  const logData = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFile('requestLog.txt', logData, (err) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement des informations de la requête :', err);
    }
  });
  next();
}

module.exports = requestLogger;
