import { useState } from 'react';

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
    <div className="mt-4 md:mt-40">
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleNameChange}
        className="w-full px-4 py-2 rounded-full bg-gray-100 text-gray-800 placeholder-gray-800 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 md:mt-2 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleClick}
      >
        Let's Play
      </button>
    </div>
  );
}

export default StartButton;
