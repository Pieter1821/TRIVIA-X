
import PropTypes from 'prop-types';

function Question({ question, options, onAnswerSelect, userAnswer }) {
  if (!options || !Array.isArray(options)) {
    return (
      <div className="bg-gray-800 text-white p-4 rounded">
        <p className='flex justify-center'>Loading...</p>
      </div>
    );
  }

  const getOptionClassName = (option) => {
    if (userAnswer === option) {
      return 'bg-blue-500 text-white border-blue-500';
    } else {
      return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li
            key={index}
            className={`cursor-pointer p-3 rounded-lg border border-gray-300 hover:bg-blue-50 ${getOptionClassName(option)}`}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onAnswerSelect: PropTypes.func.isRequired,
  userAnswer: PropTypes.string
};

export default Question;
