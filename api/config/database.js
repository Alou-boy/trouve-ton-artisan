// Connexion a la base MySQL via Sequelize
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',   // on precise qu'on utilise MySQL
    logging: false,     // pas de logs SQL dans la console
  }
);

module.exports = sequelize;