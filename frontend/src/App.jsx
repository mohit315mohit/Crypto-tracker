import { useState } from 'react';
import CryptoList from './components/CryptoList';
import CryptoChart from './components/CryptoChart';
import Portfolio from './components/Portfolio';
import News from './components/News';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-8">🚀 Crypto Tracker Dashboard</h1>

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CryptoList />
          <CryptoChart coinId="bitcoin" />
          <Portfolio token={token} />
          <News />
        </div>
       )}
    </div>
  );
}

export default App;
