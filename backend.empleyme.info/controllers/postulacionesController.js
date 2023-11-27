const PostulacionesModel = require('../models/postulacionesModel');

const postulacionesController = {
  create: (req, res) => {
    const { idCandidato, idVacante, idReclutador, Estado } = req.body;
    PostulacionesModel.create(idCandidato, idVacante, idReclutador, Estado)
      .then(result => {
        res.status(201).json({ message: 'Postulación creada exitosamente' });
      })
      .catch(err => {
        console.error('Error al crear postulación:', err);
        res.status(500).json({ error: 'Error al crear postulación' });
      });
  },

  read: (req, res) => {
    PostulacionesModel.getAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.error('Error al obtener postulaciones:', err);
        res.status(500).json({ error: 'Error al obtener postulaciones' });
      });
  },

  update: (req, res) => {
    const postId = req.params.id;
    const { idCandidato, idVacante, idReclutador, Estado } = req.body;
    PostulacionesModel.updateById(postId, idCandidato, idVacante, idReclutador, Estado)
      .then(result => {
        res.status(200).json({ message: 'Postulación actualizada exitosamente' });
      })
      .catch(err => {
        console.error('Error al actualizar postulación:', err);
        res.status(500).json({ error: 'Error al actualizar postulación' });
      });
  },

  delete: (req, res) => {
    const postId = req.params.id;
    PostulacionesModel.deleteById(postId)
      .then(result => {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Postulación no encontrada' });
        } else {
          res.status(200).json({ message: 'Postulación eliminada exitosamente' });
        }
      })
      .catch(err => {
        console.error('Error al eliminar postulación:', err);
        res.status(500).json({ error: 'Error al eliminar postulación' });
      });
  },
};

module.exports = postulacionesController;
