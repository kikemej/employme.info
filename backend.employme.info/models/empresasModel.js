const db = require('../db');

const EmpresasModel = {
  create: (nombreEmpresa, direccion) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO Empresas (NombreEmpresa, Direccion) VALUES (?, ?)';
      db.query(sql, [nombreEmpresa, direccion], (err, result) => {
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
      const sql = 'SELECT * FROM Empresas';
      db.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  getById: (empresaId) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM Empresas WHERE idEmpresas = ?';
      db.query(sql, [empresaId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  updateById: (empresaId, nombreEmpresa, direccion) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE Empresas SET NombreEmpresa=?, Direccion=? WHERE idEmpresas=?';
      db.query(sql, [nombreEmpresa, direccion, empresaId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteById: (empresaId) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM Empresas WHERE idEmpresas=?';
      db.query(sql, [empresaId], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = EmpresasModel;
