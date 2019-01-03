const mongoose = require('mongoose');

const MoveSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true
  },
  telephone: {
    type: Number,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  movefromaddress: {
    type: String,
    required: true
  },
  movetoaddress: {
    type: String,
    required: true
  },
  numberofrooms: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stairs: {
    type: Number,
    required: true
  },
  driver: {
    type: String,
    required: true
  },
  referrer: {
    type: String,
    required: true
  },
  datecreated: {
    type: Date,
    default: Date.now
  },
  modedate: {
    type: Date,
    required: Date.now
  },
  movetime: {
    type: Date,
    required: Date.now
  }
});

const Move = mongoose.model('Move', MoveSchema);

module.exports = Move;