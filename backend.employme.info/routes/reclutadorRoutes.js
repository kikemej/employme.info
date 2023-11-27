const express = require('express');
const router = express.Router();
const reclutadorController = require('../controllers/reclutadorController');

router.post('/create', (req, res) => {
  reclutadorController.create(req, res);
});

router.get('/read', (req, res) => {
  reclutadorController.read(req, res);
});

router.get('/read/:id', (req, res) => {
  reclutadorController.readId(req, res);
});

router.put('/update/:id', (req, res) => {
  reclutadorController.update(req, res);
});

router.delete('/delete/:id', (req, res) => {
  reclutadorController.delete(req, res);
});

module.exports = router;
