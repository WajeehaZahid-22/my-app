import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
        {/* About Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="text-gray-200">
            We provide reliable medical information and services to ensure better health for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Services</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
            <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="text-gray-200">Email: <a href="mailto:info@medicalinfo.com" className="hover:text-gray-200">info@medicalinfo.com</a></p>
          <p className="text-gray-200">Phone: <a href="tel:+1234567890" className="hover:text-gray-200">(123) 456-7890</a></p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-200" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-200" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-200" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-200 text-sm">&copy; {new Date().getFullYear()} Medical Info. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
