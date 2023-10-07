import { useState } from 'react';

function Home({ onStartGame }) {
  const [userName] = useState('');

  const handleStartGame = () => {
    if (userName.trim() !== '') {
      onStartGame(userName);
    }
  };

  return (
    <div className="flex items-center justify-center" >
      <div className="bg-black p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-4xl font-bold mb-4">Trivia-X</h1>
        <p className="mb-4">A fun trivia game to test your knowledge.</p>
        <StartButton userName={userName} onStartGame={handleStartGame} />
      </div>
    </div>
  );
}

export default Home;

