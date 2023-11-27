const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/create', (req, res) => {
  usuariosController.create(req, res);
});

router.get('/read', (req, res) => {
  usuariosController.read(req, res); // Llamada al controlador read
});

router.put('/update/:id', (req, res) => {
  usuariosController.update(req, res);
});

router.delete('/delete/:id', (req, res) => {
  usuariosController.delete(req, res);
});

module.exports = router;
