const express = require('express');
const router = express.Router();
const categorieController = require('../controllers/categorieController');

// GET /api/categories
router.get('/', categorieController.getAllCategories);

module.exports = router;