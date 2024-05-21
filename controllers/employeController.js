// controllers/employeController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addEmploye = async (req, res) => {
  const { nom, poste, restaurantId } = req.body;
  const employe = await prisma.employe.create({
    data: {
      nom,
      poste,
      restaurantId,
    },
  });
  res.json(employe);
};

module.exports = {
  addEmploye,
};
