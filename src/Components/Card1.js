import React from 'react';

const Card1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      {/* Image Section */}
      <div className="lg:w-1/2 mb-4 lg:mb-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdVIk8cxsG_9Uc2jbikFLztiafFFv13U75A&s"
          alt="Doctor"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 lg:pl-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Your Doctor's Appointment</h1>
        <p className="text-gray-600 mb-4">
          Find and schedule appointments with top-rated doctors conveniently and securely.
        </p>
        <h5 className="underline text-gray-700">• 24 Hours Availability</h5>
        <h5 className="underline text-gray-700">• Top-rated Doctors</h5>
        <h5 className="underline text-gray-700">• Hassle-free Booking</h5>
        <h5 className="underline text-gray-700">• Secure Payments</h5>
        <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Card1;
