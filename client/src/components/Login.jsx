import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFormLoaded(true);
    }, 100);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { userName, password });
      if (res.data.success) {
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div className="relative">
      {/* Floating bubbles */}
      <div className="bubble" />
      <div className="bubble" />
      <div className="bubble" />
      
      <div className="flex items-center justify-center min-h-screen">
        <div className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 ${formLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-2xl font-bold text-center mb-6">User Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">UserName</label>
              <input
                type="username"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-900 text-white font-bold py-2 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
