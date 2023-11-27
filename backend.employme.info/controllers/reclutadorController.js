const ReclutadorModel = require('../models/reclutadorModel');

const reclutadorController = {
  create: (req, res) => {
    const { idUsuario, idEmpresas, idVacante } = req.body;
    ReclutadorModel.create(idUsuario, idEmpresas, idVacante)
      .then(result => {
        res.status(201).json({ message: 'Reclutador creado exitosamente' });
      })
      .catch(err => {
        console.error('Error al crear reclutador:', err);
        res.status(500).json({ error: 'Error al crear reclutador' });
      });
  },

  read: (req, res) => {
    ReclutadorModel.getAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.error('Error al obtener reclutadores:', err);
        res.status(500).json({ error: 'Error al obtener reclutadores' });
      });
  },

  readId: (req, res) => {
    const idReclutador = req.params.id;
    ReclutadorModel.getById(idReclutador)
      .then(result => {
        if (!result) {
          res.status(404).json({ error: 'Reclutador no encontrado' });
        } else {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        console.error('Error al obtener el reclutador:', err);
        res.status(500).json({ error: 'Error al obtener el reclutador' });
      });
  },

  update: (req, res) => {
    const idReclutador = req.params.id;
    const { idUsuario, idEmpresas, idVacante } = req.body;
    ReclutadorModel.updateById(idReclutador, idUsuario, idEmpresas, idVacante)
      .then(result => {
        res.status(200).json({ message: 'Reclutador actualizado exitosamente' });
      })
      .catch(err => {
        console.error('Error al actualizar el reclutador:', err);
        res.status(500).json({ error: 'Error al actualizar el reclutador' });
      });
  },

  delete: (req, res) => {
    const idReclutador = req.params.id;
    ReclutadorModel.deleteById(idReclutador)
      .then(result => {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Reclutador no encontrado' });
        } else {
          res.status(200).json({ message: 'Reclutador eliminado exitosamente' });
        }
      })
      .catch(err => {
        console.error('Error al eliminar el reclutador:', err);
        res.status(500).json({ error: 'Error al eliminar el reclutador' });
      });
  },
};

module.exports = reclutadorController;
