const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Load Move model
const User = require('../models/move');

//Welcome Page
router.get('/dashboard', (req, res) => res.render('welcome'));

router.post('/move', (req, res) => { // ROUTE TO RECIEVE DATA FROM MOVE
  console.log(req.body)
  /**
   SHOULD OUTPUT:
   { customername: '',
    phonenumber: '',
    town: '',
    movefromaddress: '',
    movetoaddress: '',
    numberofstairs: '',
    numberofrooms: '',
    movedate: '',
    movetime: '',
    description: '' 
    }
   */
})


module.exports = router;
