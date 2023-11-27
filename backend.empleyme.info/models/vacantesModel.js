const db = require('../db');

const VacantesModel = {
  create: (titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Vacantes (Titulo, Descripcion, Salario, Estado, fechaPublicacion, fechaCierre) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(sql, [titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  getAll: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Vacantes';
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  getById: (idVacante) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Vacantes WHERE idVacante = ?';
      db.query(sql, [idVacante], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]); // Devuelve solo el primer resultado
        }
      });
    });
  },

  updateById: (idVacante, titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE Vacantes SET Titulo=?, Descripcion=?, Salario=?, Estado=?, fechaPublicacion=?, fechaCierre=? WHERE idVacante=?';
      db.query(sql, [titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre, idVacante], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteById: (idVacante) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Vacantes WHERE idVacante=?';
      db.query(sql, [idVacante], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = VacantesModel;
