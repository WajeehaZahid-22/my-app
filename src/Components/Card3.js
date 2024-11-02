import React from 'react';

const institutions = [
  { name: 'Harvard Medical School', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9SA34261dFuT8_M22NXoL6_g7j6G2iFUg9Ze8IHhOmFHN-Mc5GiXLOWx_1R2mCfx2Vn4&usqp=CAU' },
  { name: 'Johns Hopkins University', image: 'https://media.istockphoto.com/id/1349606247/vector/certificate-template.jpg?s=612x612&w=0&k=20&c=BWqqnPs1l6fOu4u_72gmsgCZ_zV_asBK7VjRnjNBRLQ=' },
  { name: 'Stanford University', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejTIPgRzpDVG8br7NU55DdtETYlLf51iS3X0s2y5M9wIgPbiENIvTks6dNjh0eFnnPNM&usqp=CAU' },
  { name: 'University of California, San Francisco', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYv-ESCinkZ8PUb6UkW2_o2iGXdu-KvZ0BOCdjDQX7Ib9KF5ocozk6Kan2Y2PkJr_lLc&usqp=CAU' },
  { name: 'Columbia University', image: 'https://www.shutterstock.com/image-vector/green-gold-geometric-effect-achievement-600nw-2388531495.jpg' },
  { name: 'Mayo Clinic', image: 'https://media.istockphoto.com/id/1349606247/vector/certificate-template.jpg?s=612x612&w=0&k=20&c=BWqqnPs1l6fOu4u_72gmsgCZ_zV_asBK7VjRnjNBRLQ=' },
];

const InstitutionCards = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {institutions.map((institution, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={institution.image} 
              alt={institution.name} 
              className="w-full h-64 object-cover" // Increased height from h-48 to h-64
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{institution.name}</h2>
              <button className="mt-2 w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionCards;
