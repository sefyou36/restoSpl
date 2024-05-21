const express = require('express');
const router = express.Router();
const repasRouter = require('../controllers/repasController');

router.get('/repas',repasRouter.getRepas);
router.post('/add-repas', repasRouter.addRepas);

module.exports = router;
