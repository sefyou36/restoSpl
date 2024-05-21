// server.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cookieParser = require('cookie-parser');
const requestLogger = require('./requestLogger');
// const sendThankYouEmail = require('./mailers');

const repasRouter = require('./routers/repasRouter');
const employeRouter = require('./routers/employeRouter');
const newsletterRouter = require('./routers/newsletterRouter');
const mainRouter = require('./routers/mainRouter');
const categorieRouter = require("./routers/categorieRoutes");
const restaurantRouter = require("./routers/restaurantRouter");

const prisma = new PrismaClient();
const app = express();

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requestLogger);

// Utilisation des routers
app.use('/', mainRouter);
app.use('/repas', repasRouter);
app.use('/employe', employeRouter);
app.use('/newsletter', newsletterRouter);
app.use('/categorie', categorieRouter);
app.use('/restaurant', restaurantRouter);


// Endpoint pour obtenir tous les repas disponibles


app.get('/add-employe', (req, res) => {
  res.render('add-employe');
});

// Endpoint pour afficher un formulaire
app.get('/form', (req, res) => {
  res.render('form');
});

// Endpoint pour traiter les données du formulaire
app.post('/submit', (req, res) => {
  // Traitez les données du formulaire ici...
  res.send('Formulaire soumis avec succès !');
});

app.post('/send-email', (req, res) => {
  const { email } = req.body;
  sendThankYouEmail(email);  // Envoyer un email de remerciement
  res.send('Email de remerciement envoyé avec succès !');
});

// Définissez vos autres routes ici...

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
