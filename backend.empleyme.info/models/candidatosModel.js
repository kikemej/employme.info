const db = require('../db');

const CandidatosModel = {
  create: (idUsuario, experiencia, educacion, habilidades, perfilProfesional) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Candidatos (idUsuario, Experiencia, Educacion, Habilidades, PerfilProfesional) VALUES (?, ?, ?, ?, ?)';
      db.query(sql, [idUsuario, experiencia, educacion, habilidades, perfilProfesional], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  read: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Candidatos';
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  readId: (idCandidato) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Candidatos WHERE idCandidato = ?';
      db.query(sql, [idCandidato], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  update: (idCandidato, experiencia, educacion, habilidades, perfilProfesional) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE Candidatos SET Experiencia=?, Educacion=?, Habilidades=?, PerfilProfesional=? WHERE idCandidato=?';
      db.query(sql, [experiencia, educacion, habilidades, perfilProfesional, idCandidato], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  delete: (idCandidato) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Candidatos WHERE idCandidato=?';
      db.query(sql, [idCandidato], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = CandidatosModel;
