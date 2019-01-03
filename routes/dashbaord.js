const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Load Move model
const User = require('../models/move');

//Welcome Page
router.get('/dashboard', (req, res) => res.render('welcome'));


module.exports = router;
