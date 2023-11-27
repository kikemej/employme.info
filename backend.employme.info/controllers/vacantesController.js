const VacantesModel = require('../models/vacantesModel');

const vacantesController = {
  create: (req, res) => {
    const { titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre } = req.body;
    VacantesModel.create(titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre)
      .then(result => {
        res.status(201).json({ message: 'Vacante creada exitosamente' });
      })
      .catch(err => {
        console.error('Error al crear vacante:', err);
        res.status(500).json({ error: 'Error al crear vacante' });
      });
  },

  read: (req, res) => {
    VacantesModel.getAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.error('Error al obtener vacantes:', err);
        res.status(500).json({ error: 'Error al obtener vacantes' });
      });
  },

  readId: (req, res) => {
    const idVacante = req.params.id;
    VacantesModel.getById(idVacante)
      .then(result => {
        if (!result) {
          res.status(404).json({ error: 'Vacante no encontrada' });
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        console.error('Error al obtener la vacante:', err);
        res.status(500).json({ error: 'Error al obtener la vacante' });
      });
  },

  update: (req, res) => {
    const idVacante = req.params.id;
    const { titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre } = req.body;
    VacantesModel.updateById(idVacante, titulo, descripcion, salario, estado, fechaPublicacion, fechaCierre)
      .then(result => {
        res.status(200).json({ message: 'Vacante actualizada exitosamente' });
      })
      .catch(err => {
        console.error('Error al actualizar la vacante:', err);
        res.status(500).json({ error: 'Error al actualizar la vacante' });
      });
  },

  delete: (req, res) => {
    const idVacante = req.params.id;
    VacantesModel.deleteById(idVacante)
      .then(result => {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Vacante no encontrada' });
        } else {
          res.status(200).json({ message: 'Vacante eliminada exitosamente' });
        }
      })
      .catch(err => {
        console.error('Error al eliminar la vacante:', err);
        res.status(500).json({ error: 'Error al eliminar la vacante' });
      });
  },
};

module.exports = vacantesController;
