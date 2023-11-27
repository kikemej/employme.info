const express = require('express');
const router = express.Router();
const empresasController = require('../controllers/empresasController');

router.post('/create', (req, res) => {
  empresasController.create(req, res);
});

router.get('/read', (req, res) => {
  empresasController.read(req, res);
});

router.get('/read/:id', (req, res) => {
  empresasController.readById(req, res);
});

router.put('/update/:id', (req, res) => {
  empresasController.update(req, res);
});

router.delete('/delete/:id', (req, res) => {
  empresasController.delete(req, res);
});

module.exports = router;
