const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Controller pour gérer les opérations sur les restaurants

// Fonction pour créer un nouveau restaurant
const createRestaurant = async (req, res) => {
  try {
    const { nom, adresse, telephone, email, siteWeb } = req.body;
    const newRestaurant = await prisma.restaurant.create({
      data: {
        nom,
        adresse,
        telephone,
        email,
        siteWeb,
      },
    });
    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error('Erreur lors de la création du restaurant :', error);
    res.status(500).json({ error: "Erreur lors de la création du restaurant" });
  }
};

module.exports = { createRestaurant };
