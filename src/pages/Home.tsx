import React, { useState } from 'react';

interface UserNameInputProps {
  userName: string;
  setUserName: (name: string) => void;
}

const UserNameInput: React.FC<UserNameInputProps> = ({ userName, setUserName }) => (
  <input
    type="text"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    placeholder="Enter your username"
    className="mb-4 p-2 rounded text-black w-full"
  />
);

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  error ? <p className="text-red-500 mb-4">{error}</p> : null
);

interface StartButtonProps {
  onStartGame: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStartGame }) => (
  <button
    onClick={onStartGame}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
  >
    Start Game
  </button>
);

interface HomeProps {
  onStartGame: (userName: string) => void;
}

const Home: React.FC<HomeProps> = ({ onStartGame }) => {
  const [userName, setUserName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleStartClick = () => {
    if (userName.trim() === '') {
      setError('Please enter a valid username.');
      return;
    }
    setError('');
    onStartGame(userName);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-center">Trivia-X</h1>
        <p className="mb-6 text-center">A fun trivia game to test your knowledge.</p>
        <UserNameInput userName={userName} setUserName={setUserName} />
        <ErrorMessage error={error} />
        <StartButton onStartGame={handleStartClick} />
      </div>
    </div>
  );
};

export default Home;