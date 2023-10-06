import React from 'react';

function Home({ onStartGame }) {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Trivia-X</h2>
        <p className="text-lg mb-4">Challenge your knowledge and have fun!</p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-yellow-600"
            onClick={onStartGame}
          >
            Let's Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

