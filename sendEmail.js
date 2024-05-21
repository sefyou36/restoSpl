const nodemailer = require('nodemailer');

// Créer un transporteur SMTP pour Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'stpmtest9@gmail.com',
    pass: 'sTpM1234'  // Remplacez ceci par le mot de passe d'application généré
  }
});

// Fonction pour envoyer un e-mail
const sendEmail = (to, subject, text, html) => {
  const mailOptions = {
    from: 'stpmtest9@gmail.com',
    to: to,
    subject: subject,
    text: text,
    html: html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    } else {
      console.log('E-mail envoyé avec succès :', info.response);
    }
  });
};

module.exports = sendEmail;
