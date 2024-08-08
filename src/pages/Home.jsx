mport React, { useState } from 'react';
import StartButton from './StartButton';

// Component for the input field
const UserNameInput = ({ userName, setUserName }) => (
  <input
    type="text"
    value={userName}
    onChange={(e) => setUserName(e.target.value)}
    placeholder="Enter your username"
    className="mb-4 p-2 rounded"
  />
);

// Component for displaying error messages
const ErrorMessage = ({ error }) => (
  error ? <p className="text-red-500 mb-4">{error}</p> : null
);

function Home({ onStartGame }) {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  // Function to handle the start button click
  const handleStartClick = () => {
    if (userName.trim() === '') {
      setError('Please enter a valid username.');
      return;
    }
    setError('');
    onStartGame(userName);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-4xl font-bold mb-4">Trivia-X</h1>
        <p className="mb-4">A fun trivia game to test your knowledge.</p>
        <UserNameInput userName={userName} setUserName={setUserName} />
        <ErrorMessage error={error} />
        <StartButton onStartGame={handleStartClick} />
      </div>
    </div>
  );
}

export default Home;