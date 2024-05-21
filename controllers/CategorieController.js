const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Controller pour gérer les opérations liées aux catégories

// Récupérer toutes les catégories
const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.categorie.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des catégories" });
  }
};

// Créer une nouvelle catégorie
const createCategory = async (req, res) => {
  const { nom } = req.body;
  try {
    const newCategory = await prisma.categorie.create({
      data: {
        nom,
      },
    });
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la création de la catégorie" });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
};
