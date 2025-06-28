import { useEffect, useState } from 'react';
import api from '../api';

const CryptoList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    api.get('/crypto/top').then((res) => setCoins(res.data));
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl mb-3">🌐 Top Cryptos</h2>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id} className="border-b border-gray-700 py-2">
            {coin.name} - ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
