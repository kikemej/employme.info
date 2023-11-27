const db = require('../db');

const LoginModel = {
  create: (email, hashedPassword) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO login (Email, Pass) VALUES (?, ?)';
      db.query(sql, [email, hashedPassword], (err, result) => {
        if (err) {
          console.error('Error en la consulta de creación:', err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  findBy: (email) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM login WHERE email=?';
      db.query(sql, [email], (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (result.length > 0) {
            const user = result[0];
            resolve({
              id: user.id,
              email: user.email,
              password: user.password,
            });
          } else {
            resolve(null);
          }
        }
      });
    });
  },
};

module.exports = LoginModel;
