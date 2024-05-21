const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');

const newsletterController = {
    create: async (req, res) => {
        const { email } = req.body;
        try {
            // Remplacez `newsletter` par `abonneNewsletter`
            const newsletter = await prisma.abonneNewsletter.create({
                data: {
                    email: email,
                    restaurantId: 1 // Remplacez par l'ID de votre restaurant
                },
            });
            console.log(newsletter.email);

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: 465,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            const mailOptions = {
                from: "apprenant3@talents4starups.com",
                to: newsletter.email,
                subject: "Découvrez les dernières nouveautés de notre restaurant !",
                text: "merhba bik 3andna 🎂",
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            res.redirect('/');
        } catch (error) {
            console.error("Error creating newsletter:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};

module.exports = newsletterController;
