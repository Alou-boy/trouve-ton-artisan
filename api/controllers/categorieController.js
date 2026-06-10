const { Categorie } = require('../models');

// GET toutes les categories (pour le menu du header)
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
};