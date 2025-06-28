import { useEffect, useState } from 'react';
import api from '../api';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api.get('/news').then((res) => setNews(res.data));
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h2 className="text-xl mb-3">📰 Latest Crypto News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {item.title}
            </a>
            <p className="text-gray-400 text-sm">{item.published_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
