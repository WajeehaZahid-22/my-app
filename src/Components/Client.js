import React from 'react';

const Client = () => {
  const clients = [
    {
      name: "Client 1",
      image: "https://via.placeholder.com/100",
      rating: 4.5,
      description: "Excellent service and support.",
    },
    {
      name: "Client 2",
      image: "https://via.placeholder.com/100",
      rating: 4.0,
      description: "Very satisfied with the results.",
    },
    {
      name: "Client 3",
      image: "https://via.placeholder.com/100",
      rating: 5.0,
      description: "Highly recommend to others!",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      {/* Centered Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Happy Clients</h1>
        <p className="text-gray-600 mt-2">
          See what our clients have to say about our services.
        </p>
      </div>

      {/* Client Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg flex items-center p-4">
            <img
              src={client.image}
              alt={client.name}
              className="w-16 h-16 object-cover rounded-full mr-4" // Adjusted size and added margin
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{client.name}</h2>
              <div className="flex items-center mt-1">
                {/* Render stars based on rating */}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-${client.rating > i ? 'yellow-500' : 'gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mt-2">{client.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
