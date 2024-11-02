// src/Components/SignInForm.js

import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
    // Optionally reset fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          Sign In
        </button>
        
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-green-600 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
