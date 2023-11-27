const express = require('express');
const router = express.Router();
const vacantesController = require('../controllers/vacantesController');

router.post('/create', (req, res) => {
  vacantesController.create(req, res);
});

router.get('/read', (req, res) => {
  vacantesController.read(req, res);
});

router.get('/read/:id', (req, res) => {
  vacantesController.readId(req, res);
});

router.put('/update/:id', (req, res) => {
  vacantesController.update(req, res);
});

router.delete('/delete/:id', (req, res) => {
  vacantesController.delete(req, res);
});

module.exports = router;
