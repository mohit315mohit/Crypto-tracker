const express = require('express');
const { getCoinChart, getTopCoins} =require('../controllers/cryptoController');
const router = express.Router();
router.get('/top', getTopCoins);
router.get('/chart/:id', getCoinChart);

module.exports = router;
