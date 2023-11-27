const mysql = require('mysql');

const db = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'employme',
  password: 'usC!.1234',
  database: 'employme_web'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
