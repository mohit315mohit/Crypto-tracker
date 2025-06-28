const axios = require('axios');

exports.getNews = async (req, res) => {
  try {
    const response = await axios.get('https://cryptopanic.com/api/v1/posts/', {
      params: {
        auth_token: '2bb64b1ac222ffcbf75af0831981f13787b19174',
        filter: 'hot',           // Optional: Get trending news
        currencies: 'BTC,ETH',    // Optional: Filter for specific coins
      },
    });

    // console.log(response.data);

    // If you want to send only the news articles:
    res.json(response.data.results);

    // Or if you want to send the entire API response, use this line instead:
    // res.json(response.data);

  } catch (error) {
    console.error('Error fetching news:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch crypto news' });
  }
};
