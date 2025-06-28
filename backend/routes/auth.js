const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Simple in-memory user for demo purposes
const demoUser = { id: 1, email: 'test@example.com', password: bcrypt.hashSync('123456', 10) };

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email !== demoUser.email || !bcrypt.compareSync(password, demoUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: demoUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
