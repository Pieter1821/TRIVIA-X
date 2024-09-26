import React from 'react';

function Question({ question, options, onAnswerSelect, userAnswer }) {
  if (!options || !Array.isArray(options)) {
    return (
      <div className="bg-gray-800 text-white p-4 rounded">
        <p className='flex justify-center'>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li
            key={index}
            className={`cursor-pointer p-3 rounded-lg border border-gray-300 hover:bg-blue-50 ${
              userAnswer === option
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-gray-100 text-gray-800'
            }`}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;



