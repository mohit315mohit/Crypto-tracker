import { useState } from 'react';
import api from '../api';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      setToken(res.data.token);
      alert('Login Successful!');
    } catch {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 rounded bg-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 rounded bg-gray-700"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
