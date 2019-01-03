const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Load Move model
const User = require('../models/move');

//Welcome Page
router.get('/', (req, res) => res.render('welcome'));
//Dashboard
// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);






module.exports = router;
