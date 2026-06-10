const sequelize = require('../config/database');
const Categorie = require('./Categorie');
const Specialite = require('./Specialite');
const Artisan = require('./Artisan');

// Une categorie a plusieurs specialites
Categorie.hasMany(Specialite, { foreignKey: 'id_categorie', as: 'specialites' });
Specialite.belongsTo(Categorie, { foreignKey: 'id_categorie', as: 'categorie' });

// Une specialite a plusieurs artisans
Specialite.hasMany(Artisan, { foreignKey: 'id_specialite', as: 'artisans' });
Artisan.belongsTo(Specialite, { foreignKey: 'id_specialite', as: 'specialite' });

module.exports = { sequelize, Categorie, Specialite, Artisan };