const axios = require('axios');

exports.getTopCoins = async (req, res) => {
  const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false,
    },
  });
  res.json(response.data);
};

exports.getCoinChart = async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: '7',
    },
  });
  res.json(response.data);
};
