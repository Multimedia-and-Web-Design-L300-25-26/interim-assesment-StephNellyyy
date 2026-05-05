const express = require('express');
const { getAllCrypto, getTopGainers, getNewListings, addCrypto } = require('../controllers/cryptoController.js');

const router = express.Router();

router.get('/', getAllCrypto);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.post('/', addCrypto);

module.exports = router;