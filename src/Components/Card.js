import React from 'react';

const Card = () => {
  // Sample data for each card
  const cards = [
    { title: "Mental Disease", description: "A mental disorder, also referred to as a mental illness, a mental health condition, or a psychiatric disability, is a behavioral or mental pattern that causes significant distress or impairment of personal functioning", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTopxTK1dNAmbLm0mRS-vJO2twMNNFPMOmU8A&s" },
    { title: "Leg Muscles", description: "The leg has many muscles that allow for movement, support weight, and stabilize the body. The main muscle groups in the leg are the quadriceps, hamstrings, calves, and adductors. Each of these groups is made up of smaller muscles, and there are also other muscles that help with mobility and stabilization. .", image: "https://c.pxhere.com/photos/5e/c2/stretchen_stretch_heat_sport_muscles_sporty-516031.jpg!d" },
    { title: "Ear Disease", description: "Ear pain, also known as an earache or otalgia, can feel like a dull, sharp, or burning pain in one or both ears. It can be a symptom of many health conditions, including ear infections, and can be accompanied by other symptoms, such as:.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dq-UenxxFEno_XQU9PmaWR-OY8QJ5QmNEQ&s" },
    { title: "Lungs Disease", description: "Lung disease is a general term for any condition that prevents the lungs from working properly. It can affect the respiratory function, or how well you breathe, and the pulmonary function, or how well your lungs work. Lung disease can be caused by a number of factors, including:", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVrFLKwewv7cy_dytGfbFJ5J7ZrACqvXOTA&s" },
    { title: "Brain Tumor", description: "Lung disease is a general term for any condition that prevents the lungs from working properly. It can affect the respiratory function, or how well you breathe, and the pulmonary function, or how well your lungs work. Lung disease can be caused by a number of factors, including:.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRop6o8AAsXBak2mRnwldVyuE9H_mkIlsNaDA&s" },
    { title: "Hypertension", description: "Hypertension, also known as high blood pressure, is a condition where the pressure in your blood vessels is consistently above normal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRjClxDYoXOLPoHiYJbZqmXcfcdR7QuFm2g&s" },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden w-80 h-80">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover absolute inset-0 opacity-70" // Adjusted opacity to 70%
            />
            <div className="absolute inset-0 bg-black opacity-50" /> {/* Dark overlay increased to 50% */}
            <div className="p-4 relative z-10 h-full flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-white">{card.title}</h2> {/* Changed text color to white */}
              <p className="text-gray-200 mt-2">{card.description}</p> {/* Changed text color to lighter gray */}
              <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
