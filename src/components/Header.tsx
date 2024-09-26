import React from "react";


function Header({ onSelectGenre, selectedGenre, isLoading }) {
  const difficultyOptions = [
    { label: 'Select Difficulty', value: '' },
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  const genreOptions = [
    { label: 'Select a Genre', value: '' },
    { label: 'General Knowledge', value: '9' },
    { label: 'Video Games', value: '15' },
    { label: 'Science & Nature', value: '17' },
    { label: 'Computers', value: '18' },
    { label: 'Books', value: '10' },
  ];

  const renderOptions = (options) => {
    return options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));
  };

  return (
    <header className="text-center bg-blue-500 p-4 mb-4">
      <h1 className="text-3xl font-bold text-white">Trivia-X</h1>
      <p className="text-white">Select a Difficulty:</p>
      <label htmlFor="difficultySelect">
        <select
          id="difficultySelect"
          className="bg-gray-200 rounded p-2 mt-2"
          value={selectedGenre}
          onChange={(e) => onSelectGenre(e.target.value)}
          disabled={isLoading}
        >
          {renderOptions(difficultyOptions)}
        </select>
      </label>
      <p className="mt-2 text-white">Select a Genre:</p>
      <label htmlFor="genreSelect">
        <select
          id="genreSelect"
          className="bg-gray-200 rounded p-2 mt-2"
          value={selectedGenre}
          onChange={(e) => onSelectGenre(e.target.value)}
          disabled={isLoading}
        >
          {renderOptions(genreOptions)}
        </select>
      </label>
    </header>
  );
}

export default Header;
