// src/Components/Home.js

import React from 'react';
import Card from '../Components/Card';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';
import Card4 from '../Components/Card4';
import Footer from '../Components/Footer';
import Client from '../Components/Client';

const Home = () => {
  return (
    <>
      <br /> <br /> <br /> <br /> <br />
      <div className="flex flex-col lg:flex-row items-start justify-between p-6 bg-blue-50 min-h-screen">
        {/* Right Section with Image */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <div className="hidden lg:block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdVIk8cxsG_9Uc2jbikFLztiafFFv13U75A&s"
              alt="Doctor"
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-6"
            />
          </div>
        </div>

        {/* Left Section */}
        <div className="text-center lg:text-left max-w-lg lg:max-w-md lg:ml-10 space-y-4 lg:w-1/2 lg:self-start">
          <div className="flex items-center space-x-2 text-green-600 font-semibold">
            <span>✔</span>
            <span>24 hours availability</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Book Your Doctor's Appointment Online!
          </h1>
          <p className="text-gray-600">
            Find and schedule appointments with top-rated doctors near you.
            Convenient, secure, and hassle-free booking for all your healthcare needs.
          </p>
          <button className="mt-4 w-full lg:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
            Book an appointment
          </button>
          <div className="flex items-center justify-center lg:justify-start space-x-2 mt-4">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
              <span className="text-green-600 text-xl">📞</span>
            </div>
            <div className="text-gray-800 font-semibold">
              24H Emergency Contact
              <div className="text-gray-500">0300-7338601</div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-wrap justify-center mt-10 lg:mt-16 space-x-4 lg:space-x-8 text-center lg:text-left w-full lg:w-1/2">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">2k+</h2>
            <p className="text-gray-500">Treatments</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">8 years</h2>
            <p className="text-gray-500">Experience</p>
          </div>
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">2k+</h2>
            <p className="text-gray-500">Happy Clients</p>
          </div>
        </div>
      </div>
      <Card />
      <br /> <br /> <br /> <br />
      <Card1 />
      <br /> <br />
      <Card2 /> <br /> <br /> <br />
      <Card3 /> <br /> <br /> <br />
      <Client />
      <Card4 />
      <Footer />
    </>
  );
};

export default Home;
