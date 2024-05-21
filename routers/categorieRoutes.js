const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/CategorieController');

// Routes pour gérer les catégories

// Récupérer toutes les catégories
router.get('/categories', categorieController.getAllCategories);

// Créer une nouvelle catégorie
router.post('/add-categories', categorieController.createCategory);

module.exports = router;
