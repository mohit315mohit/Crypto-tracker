import { useEffect, useState } from 'react';
import api from '../api';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CryptoChart = ({ coinId }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    api.get(`/crypto/chart/${coinId}`).then((res) => {
      const formatted = res.data.prices.map(([time, price]) => ({
        time: new Date(time).toLocaleDateString(),
        price,
      }));
      setChartData(formatted);
    });
  }, [coinId]);

  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl mb-3">📊 {coinId.toUpperCase()} - 7 Day Price</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="price" stroke="#00bfff" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;
