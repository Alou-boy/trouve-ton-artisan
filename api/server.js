const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize, Artisan } = require('./models');  // <- charge les modeles + associations
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

const PORT = process.env.PORT || 3001;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // 100 requêtes max par IP
  message: 'Trop de requêtes, réessayez plus tard.',
});
app.use(limiter);

app.get('/', (req, res) => {
  res.json({ message: 'API Trouve ton artisan operationnelle !' });
});
// Routes
const categorieRoutes = require('./routes/categorieRoutes');
app.use('/api/categories', categorieRoutes);
const artisanRoutes = require('./routes/artisanRoutes');
app.use('/api/artisans', artisanRoutes);
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

sequelize.authenticate()
  .then(async () => {
    console.log('Connexion a la BDD reussie !');
    const nb = await Artisan.count();           // test des modeles
    console.log(`${nb} artisans dans la base`);
    const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Serveur lance sur ${HOST}:${PORT}`);
});
  })
  .catch((err) => console.error('Erreur BDD :', err));