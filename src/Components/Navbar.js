// src/Components/Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleBookNowClick = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Logo</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li>
            <Link to="/" className="text-green-600 hover:text-green-700">Home</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-600">Services</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-green-600">Blogs</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={handleBookNowClick}
            className="px-5 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Book Now
          </button>
          <Link to="/signin">
            <button className="px-5 py-2 border border-green-600 text-green-600 font-semibold rounded-md hover:bg-green-600 hover:text-white transition">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
