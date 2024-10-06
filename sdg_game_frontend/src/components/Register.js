import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');  // Confirm password
  const [error, setErrorMessage] = useState(null);  // To display error messages

  const handleRegister = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    const formData = {
        username: name,
        email: email,
        password1: password,
        password2: password2,
    };

    try {
        // Make sure the method is POST
        const response = await fetch('/api/register/', {
            method: 'POST',  // Use POST method here
            headers: {
                'Content-Type': 'application/json',  // Set headers to indicate JSON data
            },
            body: JSON.stringify(formData),  // Convert form data to JSON string
        });

        const data = await response.json();
        if (data.success) {
            // Handle success (e.g., navigate to login or show a success message)
            console.log('Registration successful!');
        } else {
            // Handle error response from the backend
            console.log('Registration failed:', data.errors);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};



  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#7bb2f2] p-8 rounded-lg shadow-md w-3/4 max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-6">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">Name</label>
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
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password2">Confirm Password</label>
            <input
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
              type="password"
              id="password2"
              placeholder="Confirm your password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
