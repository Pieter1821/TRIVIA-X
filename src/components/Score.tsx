import React from 'react';

type ScoreProps = {
  score: number;
  totalQuestionsAnswered: number;
};

const Score: React.FC<ScoreProps> = ({ score, totalQuestionsAnswered }) => {
  return (
    <div className="text-center bg-gray-200 p-4 rounded-lg mt-4">
      <p className="text-xl font-semibold text-blue-600">
        Score: {score} out of {totalQuestionsAnswered}
      </p>
    </div>
  );
};

export default Score;



