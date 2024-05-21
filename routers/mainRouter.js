// routers/mainRouter.js
const express = require('express');
const { getHome, getAbout, getContact } = require('../controllers/mainController');

const router = express.Router();

router.get('/', getHome);
router.get('/about', getAbout);
router.get('/contact', getContact);

module.exports = router;
