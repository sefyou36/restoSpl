const express = require('express');
const router = express.Router();

const newsletterController = require('../controllers/newsletterController');

router.post('/newsletters', newsletterController.create);

module.exports = router;
