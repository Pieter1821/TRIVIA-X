import React from 'react';

type GameOverModalProps = {
  userName: string;
  score: number;
  totalQuestionsAnswered: number;
  onClose: () => void;
};

const GameOverModal: React.FC<GameOverModalProps> = ({ userName, score, totalQuestionsAnswered, onClose }) => {
  const isQuestionsAnswered = totalQuestionsAnswered > 0;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 backdrop-blur-lg">
      <div className="bg-gradient-to-b from-purple-500 to-blue-500 w-96 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-semibold mb-4">Game Over!</h2>
        <p className="text-lg mb-4">
          {isQuestionsAnswered ? (
            <>
              Nice try, {userName}!{" "}
              <span role="img" aria-label="Thumbs Up" className="ml-2 text-2xl">
                👍
              </span>
            </>
          ) : (
            <>
              Thanks for giving it a shot!{" "}
              <span role="img" aria-label="Smiley Face" className="ml-2 text-2xl">
                😊
              </span>
            </>
          )}
        </p>
        <p className="text-2xl font-bold mb-4">Your Score: {score} out of 30</p>
        <p className="text-lg mb-6">Keep it up! Trivia can be fun and challenging.</p>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 w-full focus:outline-none focus:ring focus:border-blue-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;