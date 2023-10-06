import React, { useState } from 'react';

function StartButton({ onStartGame }) {
  const [userName, setUserName] = useState('');

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleClick = () => {
    if (userName.trim() !== '') {
      onStartGame(userName);
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleNameChange}
        className="w-full px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-yellow-600"
        onClick={handleClick}
      >
        Let's Play
      </button>
    </div>
  );
}

export default StartButton;
