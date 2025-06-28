const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  userId: String,
  holdings: [
    {
      coinId: String,
      amount: Number,
    },
  ],
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
