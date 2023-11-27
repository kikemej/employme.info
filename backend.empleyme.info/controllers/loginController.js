const bcrypt = require('bcrypt');
const LoginModel = require('../models/loginModel');

const loginController = {
  create: async (req, res) => {
    try {
      const { email, pass } = req.body;
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(pass, saltRounds);

      await LoginModel.create(email, hashedPassword);
      res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (err) {
      console.error('Error al crear usuario:', err);
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  },

  find: async (req, res) => {
    try {
      const email = req.body.email;
      const pass = req.body.password;
  
      const user = await LoginModel.findBy(email);
  
      if (user) {
        const hashedPass = await bcrypt.hash(pass, 10);
        const match = bcrypt.compareSync(hashedPass, user.password);
  
        if (match) {
          res.status(200).json({ message: 'Contraseña correcta' });
        } else {
          res.status(401).json({ message: 'Contraseña incorrecta' });
        }
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (err) {
      console.error('Error al encontrar usuario:', err);
      res.status(500).json({ error: 'Error al encontrar usuario' });
    }
  },
};

module.exports = loginController;
