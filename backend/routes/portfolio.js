const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const Portfolio = require('../models/Portfolio');
const router = express.Router();

// Get User Portfolio
router.get('/', protect, async (req, res) => {
  const portfolio = await Portfolio.findOne({ userId: req.user });
  res.json(portfolio);
});

// Update User Portfolio
router.post('/update', protect, async (req, res) => {
  const { holdings } = req.body;
  let portfolio = await Portfolio.findOne({ userId: req.user });

  if (!portfolio) {
    portfolio = new Portfolio({ userId: req.user, holdings });
  } else {
    portfolio.holdings = holdings;
  }
  await portfolio.save();
  res.json({ message: 'Portfolio updated' });
});

module.exports = router;
