const UsuariosModel = require('../models/usuariosModel');

const usuariosController = {
  create: (req, res) => {
    const { nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario } = req.body;
    UsuariosModel.create(nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario)
      .then(result => {
        res.status(201).json({ message: 'Usuario creado exitosamente' });
      })
      .catch(err => {
        console.error('Error al crear usuario:', err);
        res.status(500).json({ error: 'Error al crear usuario' });
      });
  },

  read: (req, res) => {
    UsuariosModel.getAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.error('Error al obtener usuarios:', err);
        res.status(500).json({ error: 'Error al obtener usuarios' });
      });
  },

  update: (req, res) => {
    const userId = req.params.id;
    const { nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario } = req.body;
    UsuariosModel.updateById(userId, nombres, apellidos, email, fechaNacimiento, telefono, tipoDeUsuario)
      .then(result => {
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
      })
      .catch(err => {
        console.error('Error al actualizar usuario:', err);
        res.status(500).json({ error: 'Error al actualizar usuario' });
      });
  },

  delete: (req, res) => {
    const userId = req.params.id;
    UsuariosModel.deleteById(userId)
      .then(result => {
        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Usuario no encontrado' });
        } else {
          res.status(200).json({ message: 'Usuario eliminado exitosamente' });
        }
      })
      .catch(err => {
        console.error('Error al eliminar usuario:', err);
        res.status(500).json({ error: 'Error al eliminar usuario' });
      });
  },
};

module.exports = usuariosController;
