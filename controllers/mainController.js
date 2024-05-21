// controllers/mainController.js
const getHome = (req, res) => {
    res.send('Bienvenue sur le site de la chaîne de restaurants Restoran !');
  };
  
  const getAbout = (req, res) => {
    res.send('Restoran est une chaîne de restaurants offrant une cuisine délicieuse depuis 20 ans. Notre mission est de vous offrir une expérience culinaire inoubliable.');
  };
  
  const getContact = (req, res) => {
    res.send('Coordonnées du restaurant : Adresse: 123 Rue des Délices, Ville, Pays, Téléphone: +1234567890, Email: contact@restoran.com');
  };
  
  module.exports = {
    getHome,
    getAbout,
    getContact,
  };
  