// routers/employeRouter.js
const express = require('express');
const { addEmploye } = require('../controllers/employeController');

const router = express.Router();

router.post('/add-employe', addEmploye);

module.exports = router;
