const EmpresasModel = require('../models/empresasModel');

const empresasController = {
  create: (req, res) => {
    const { NombreEmpresa, Direccion } = req.body;
    EmpresasModel.create(NombreEmpresa, Direccion)
      .then(result => {
        res.status(201).json({ message: 'Empresa creada exitosamente' });
      })
      .catch(err => {
        console.error('Error al crear empresa:', err);
        res.status(500).json({ error: 'Error al crear empresa' });
      });
  },

  read: (req, res) => {
    EmpresasModel.getAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.error('Error al obtener empresas:', err);
        res.status(500).json({ error: 'Error al obtener empresas' });
      });
  },

  readById: (req, res) => {
    const empresaId = req.params.id;
    EmpresasModel.getById(empresaId)
      .then(result => {
        if (!result) {
          res.status(404).json({ error: 'Empresa no encontrada' });
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        console.error('Error al obtener empresa por ID:', err);
        res.status(500).json({ error: 'Error al obtener empresa por ID' });
      });
  },

  update: (req, res) => {
    const empresaId = req.params.id;
    const { NombreEmpresa, Direccion } = req.body;
    EmpresasModel.updateById(empresaId, NombreEmpresa, Direccion)
      .then(result => {
        res.status(200).json({ message: 'Empresa actualizada exitosamente' });
      })
      .catch(err => {
        console.error('Error al actualizar empresa:', err);
        res.status(500).json({ error: 'Error al actualizar empresa' });
      });
  },

  delete: (req, res) => {
    const empresaId = req.params.id;
    EmpresasModel.deleteById(empresaId)
      .then(result => {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Empresa no encontrada' });
        } else {
          res.status(200).json({ message: 'Empresa eliminada exitosamente' });
        }
      })
      .catch(err => {
        console.error('Error al eliminar empresa:', err);
        res.status(500).json({ error: 'Error al eliminar empresa' });
      });
  },
};

module.exports = empresasController;
