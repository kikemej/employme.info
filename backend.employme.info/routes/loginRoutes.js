const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/create', (req, res) => {
  loginController.create(req, res);
});

router.post('/find', (req, res) => {
  loginController.find(req, res);
});

module.exports = router;
