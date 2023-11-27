const db = require('../db');

const ReclutadorModel = {
  create: (idUsuario, idEmpresas, idVacante) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Reclutadores (idUsuario, idEmpresas, idVacante) VALUES (?, ?, ?)';
      db.query(sql, [idUsuario, idEmpresas, idVacante], (err, result) => {
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
      const sql = 'SELECT * FROM Reclutadores';
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  getById: (idReclutador) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Reclutadores WHERE idReclutador = ?';
      db.query(sql, [idReclutador], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0]); // Devuelve solo el primer resultado
        }
      });
    });
  },

  updateById: (idReclutador, idUsuario, idEmpresas, idVacante) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE Reclutadores SET idUsuario=?, idEmpresas=?, idVacante=? WHERE idReclutador=?';
      db.query(sql, [idUsuario, idEmpresas, idVacante, idReclutador], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteById: (idReclutador) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Reclutadores WHERE idReclutador=?';
      db.query(sql, [idReclutador], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = ReclutadorModel;
