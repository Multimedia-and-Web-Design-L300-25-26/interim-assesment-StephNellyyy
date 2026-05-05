const Crypto = require('../models/Crypto.js');

const getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getTopGainers = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ change24h: -1 });
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getNewListings = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const addCrypto = async (req, res) => {
  const { name, symbol, price, image, change24h } = req.body;
  try {
    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({ message: 'Cryptocurrency added successfully', crypto });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getAllCrypto, getTopGainers, getNewListings, addCrypto };