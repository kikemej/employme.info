const db = require('../db');

const PostulacionesModel = {
  create: (idCandidato, idVacante, idReclutador, Estado) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Postulaciones (idCandidato, idVacante, idReclutador, Estado) VALUES (?, ?, ?, ?)';
      db.query(sql, [idCandidato, idVacante, idReclutador, Estado], (err, result) => {
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
      const sql = 'SELECT * FROM Postulaciones';
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  updateById: (postId, idCandidato, idVacante, idReclutador, Estado) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE Postulaciones SET idCandidato=?, idVacante=?, idReclutador=?, Estado=? WHERE idPostulacion=?';
      db.query(sql, [idCandidato, idVacante, idReclutador, Estado, postId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteById: (postId) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Postulaciones WHERE idPostulacion=?';
      db.query(sql, [postId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = PostulacionesModel;
