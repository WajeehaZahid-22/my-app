import React, { useState } from 'react';

const Card4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Frequently Ask Question</h2>
        <p className="text-gray-600 mb-8 text-center">
          We use only the best quality materials on the market in order to provide the best products to our patients.
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-green-600 font-semibold">{item.question}</span>
                <span>{openIndex === index ? '-' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'See the face of Mars',
    answer:
      'Parts formed a great hindrance to my speed, I resolved, contrary to my first intention, to make the being of a gigantic stature that is to say, about eight feet in height, and proportionably large. After having formed this determination, and having spent some months in successfully.',
  },
  {
    question: 'Rare experience',
    answer: '',
  },
  {
    question: 'Fine telescope',
    answer: '',
  },
  {
    question: 'Our latest strategy',
    answer: '',
  },
];

export default Card4;