const db = require('../db');

const UsuariosModel = {
  create: (nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Usuarios (nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(sql, [nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario], (err, result) => {
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
      const sql = 'SELECT * FROM Usuarios';
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  updateById: (userId, nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE Usuarios SET nombres=?, apellidos=?, email=?, fechaNacimiento=?, telefono=?, tipoDeUsuario=? WHERE idUsuario=?';
      db.query(sql, [nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario, userId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteById: (userId) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Usuarios WHERE idUsuario=?';
      db.query(sql, [userId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = UsuariosModel;
