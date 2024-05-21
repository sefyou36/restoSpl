const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

// Route pour créer un nouveau restaurant
router.post('/resto', restaurantController.createRestaurant);

module.exports = router;
