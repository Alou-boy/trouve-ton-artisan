const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');

router.get('/', artisanController.getAllArtisans);
router.get('/top', artisanController.getTopArtisans); 
router.get('/recherche/:terme', artisanController.searchArtisans);
router.get('/categorie/:nom', artisanController.getArtisansByCategorie);  // AVANT /:id !
router.get('/:id', artisanController.getArtisanById);

module.exports = router;