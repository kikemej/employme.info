const express = require('express');
const router = express.Router();
const candidatosController = require('../controllers/candidatosController');

router.post('/create', (req, res) => {
  candidatosController.create(req, res);
});

router.get('/read', (req, res) => {
  candidatosController.read(req, res);
});

router.get('/read/:idCandidato', (req, res) => {
  candidatosController.readId(req, res);
});

router.put('/update/:idCandidato', (req, res) => {
  candidatosController.update(req, res);
});

router.delete('/delete/:idCandidato', (req, res) => {
  candidatosController.delete(req, res);
});

module.exports = router;
