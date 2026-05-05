const express = require('express');
const { register, login, getProfile, logout } = require('../controllers/authController.js');
const protect = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.post('/logout', logout);

module.exports = router;