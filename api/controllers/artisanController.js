const { Artisan, Specialite, Categorie } = require('../models');
const { Op } = require('sequelize');

// Jointure reutilisable : artisan + sa specialite + sa categorie
const avecSpecialiteEtCategorie = {
  model: Specialite,
  as: 'specialite',
  include: [{ model: Categorie, as: 'categorie' }],
};

// GET tous les artisans
exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({ include: avecSpecialiteEtCategorie });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// GET les artisans du mois (top = true)
exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: avecSpecialiteEtCategorie,
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// GET un artisan par son id (pour la fiche)
exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: avecSpecialiteEtCategorie,
    });
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouve' });
    }
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};
// GET recherche d'artisans par nom (barre de recherche)
exports.searchArtisans = async (req, res) => {
  try {
    const terme = req.params.terme;
    const artisans = await Artisan.findAll({
      where: { nom: { [Op.like]: `%${terme}%` } },
      include: avecSpecialiteEtCategorie,
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};

// GET artisans d'une categorie (menu : Batiment, Services...)
exports.getArtisansByCategorie = async (req, res) => {
  try {
    const nomCategorie = req.params.nom;
    const artisans = await Artisan.findAll({
      include: [{
        model: Specialite,
        as: 'specialite',
        include: [{
          model: Categorie,
          as: 'categorie',
          where: { nom: nomCategorie },
        }],
      }],
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};