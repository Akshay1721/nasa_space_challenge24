import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // To display error messages

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login/', {
        username: email,
        password: password,
      });

      if (response.data.success) {
        // Redirect to the desired page upon successful login
        navigate('/sdg-info');
      } else {
        // Display error messages from the backend
        setError(response.data.errors);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#7bb2f2] p-8 rounded-lg shadow-md w-3/4 max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-6">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
