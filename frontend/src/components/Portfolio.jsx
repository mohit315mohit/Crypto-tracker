import { useEffect, useState } from 'react';
import api from '../api';

const Portfolio = ({ token }) => {
  const [portfolio, setPortfolio] = useState(null);
  const [holdings, setHoldings] = useState('');

  useEffect(() => {
    api.get('/portfolio', {
      headers: { Authorization: token },
    }).then((res) => setPortfolio(res.data));
  }, [token]);

  const handleUpdate = () => {
    try {
      const parsed = JSON.parse(holdings);
      api.post('/portfolio/update', { holdings: parsed }, {
        headers: { Authorization: token },
      }).then(() => alert('Portfolio Updated'));
    } catch {
      alert('Invalid JSON Format');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl mb-3">💼 Your Portfolio</h2>
      <pre className="text-sm bg-gray-700 p-2 rounded">{JSON.stringify(portfolio, null, 2)}</pre>

      <textarea
        placeholder='[{"coinId":"bitcoin","amount":0.5}]'
        value={holdings}
        onChange={(e) => setHoldings(e.target.value)}
        className="w-full mt-3 p-2 rounded bg-gray-700 text-sm"
        rows="5"
      />

      <button
        onClick={handleUpdate}
        className="mt-2 w-full bg-green-500 hover:bg-green-600 p-2 rounded"
      >
        Update Portfolio
      </button>
    </div>
  );
};

export default Portfolio;
