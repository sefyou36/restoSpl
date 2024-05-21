// controllers/repasController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getRepas = async (req, res) => {
  const repas = await prisma.repas.findMany();
  res.json(repas);
};

const addRepas = async (req, res) => {
  const { nom, description, prix, categorieId } = req.body;
  try {
    const repas = await prisma.repas.create({
      data: {
        nom,
        description,
        prix,
        categorieId,
      },
    });
    res.status(201).json({ message: 'Repas ajouté avec succès', repas });
  } catch (error) {
    console.error('Erreur lors de l\'ajout du repas :', error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout du repas' });
  }
};

module.exports = {
  getRepas,
  addRepas,
};
