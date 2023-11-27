const express = require('express');
const router = express.Router();
const postulacionesController = require('../controllers/postulacionesController');

router.post('/create', (req, res) => {
  postulacionesController.create(req, res);
});

router.get('/read', (req, res) => {
  postulacionesController.read(req, res);
});

router.put('/update/:id', (req, res) => {
  postulacionesController.update(req, res);
});

router.delete('/delete/:id', (req, res) => {
  postulacionesController.delete(req, res);
});

module.exports = router;
