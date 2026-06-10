const nodemailer = require('nodemailer');

// Transporteur Mailtrap (SMTP de test)
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.envoyerMessage = async (req, res) => {
  try {
    const { nom, email, message, artisan, artisanEmail } = req.body;

    if (!nom || !email || !message) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

    await transporter.sendMail({
      from: '"Trouve ton artisan" <contact@trouve-ton-artisan.fr>',
      to: artisanEmail,
      replyTo: email,
      subject: `Nouveau message pour ${artisan}`,
      text: `De : ${nom} (${email})\n\n${message}`,
      html: `
        <h2>Nouveau message pour ${artisan}</h2>
        <p><strong>De :</strong> ${nom} (${email})</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true, message: 'Message envoye avec succes !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'envoi", error: error.message });
  }
};