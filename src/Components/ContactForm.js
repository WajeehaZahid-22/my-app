import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-green-600 py-10">
      <div className="container mx-auto max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">Contact Us</h2>
        
        <form>
          {/* First and Last Name Inputs */}
          <div className="flex mb-4">
            <div className="flex-1 mr-2">
              <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex-1 ml-2">
              <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Email and Phone Number Inputs */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 rounded-md p-2" 
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full border border-gray-300 rounded-md p-2" 
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Date Selector */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-semibold mb-1">Select Date</label>
            <input 
              type="date" 
              id="date" 
              className="w-full border border-gray-300 rounded-md p-2" 
              required
            />
          </div>

          {/* How Can We Help Dropdown */}
          <div className="mb-4">
            <label htmlFor="help" className="block text-sm font-semibold mb-1">How Can We Help?</label>
            <select 
              id="help" 
              className="w-full border border-gray-300 rounded-md p-2" 
              required
            >
              <option value="">Select an option</option>
              <option value="general inquiry">General Inquiry</option>
              <option value="appointment booking">Appointment Booking</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message Area */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
            <textarea 
              id="message" 
              className="w-full border border-gray-300 rounded-md p-2" 
              rows="4" 
              placeholder="Your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-green-700 text-white font-semibold rounded-md py-2 hover:bg-green-800 transition"
          >
            Book an Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
