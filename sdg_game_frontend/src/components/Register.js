import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [schoolName, setSchoolName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic for registration can be added here
    navigate('/Login'); // Redirect to landing page after registration
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#7bb2f2] p-8 rounded-lg shadow-md w-3/4 max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
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
            <label className="block text-white text-sm font-bold mb-2" htmlFor="schoolName">
              School Name
            </label>
            <input
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
              type="text"
              id="schoolName"
              placeholder="Enter your school name"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
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
            Register
          </button>
          <p className="text-sm text-white mt-4">
            Already have an account?{' '}
            <span
              className="text-green-300 hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
