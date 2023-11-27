const CandidatosModel = require('../models/candidatosModel');

const candidatosController = {
  create: (req, res) => {
    const { idUsuario, experiencia, educacion, habilidades, perfilProfesional } = req.body;
    CandidatosModel.create(idUsuario, experiencia, educacion, habilidades, perfilProfesional)
      .then(result => {
        res.status(201).json({ message: 'Candidato creado exitosamente' });
      })
      .catch(err => {
        console.error('Error al crear candidato:', err);
        res.status(500).json({ error: 'Error al crear candidato' });
      });
  },

  read: (req, res) => {
    CandidatosModel.read()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.error('Error al obtener candidatos:', err);
        res.status(500).json({ error: 'Error al obtener candidatos' });
      });
  },

  readId: (req, res) => {
    const { idCandidato } = req.params;
    CandidatosModel.readId(idCandidato)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.error('Error al obtener candidato por ID:', err);
        res.status(500).json({ error: 'Error al obtener candidato por ID' });
      });
  },

  update: (req, res) => {
    const { idCandidato } = req.params;
    const { experiencia, educacion, habilidades, perfilProfesional } = req.body;
    CandidatosModel.update(idCandidato, experiencia, educacion, habilidades, perfilProfesional)
      .then(result => {
        res.status(200).json({ message: 'Candidato actualizado exitosamente' });
      })
      .catch(err => {
        console.error('Error al actualizar candidato:', err);
        res.status(500).json({ error: 'Error al actualizar candidato' });
      });
  },

  delete: (req, res) => {
    const { idCandidato } = req.params;
    CandidatosModel.delete(idCandidato)
      .then(result => {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Candidato no encontrado' });
        } else {
          res.status(200).json({ message: 'Candidato eliminado exitosamente' });
        }
      })
      .catch(err => {
        console.error('Error al eliminar candidato:', err);
        res.status(500).json({ error: 'Error al eliminar candidato' });
      });
  },
};

module.exports = candidatosController;
