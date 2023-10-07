import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Timer from './components/Timer';
import Score from './components/Score';
import QuizData from '../utils/quizdata';
import GameOverModal from './components/GameOverModal';
import StartButton from './components/StartButton';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answerAlert, setAnswerAlert] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('10');
  const [gameStarted, setGameStarted] = useState(false);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (gameStarted) {
      QuizData(selectedGenre)
        .then((data) => setQuestions(data))
        .catch((error) => console.error('Error fetching quiz questions:', error));
    }
  }, [gameStarted, selectedGenre]);

  const resetGame = () => {
    setGameStarted(false);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer(null);
    setAnswerAlert(null);
    setTotalQuestionsAnswered(0);
    setTimeLeft(2);
    setUserName('');
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer(null);
      setAnswerAlert(null);
      setTimeLeft(2);
    } else {
      setShowGameOverModal(true);
    }
  };

  const handleCloseGameOverModal = () => {
    setShowGameOverModal(false);
    resetGame();
  };

  const handleAnswerSelect = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswer;

    setUserAnswer(selectedAnswer);
    setScore(isCorrect ? score + 1 : score);
    setAnswerAlert(isCorrect ? 'Correct!' : 'Wrong!');
    setTotalQuestionsAnswered(totalQuestionsAnswered + 1);

    setTimeout(moveToNextQuestion, 1000);
  };

  const startGame = (userName) => {
    setGameStarted(true);
    setUserName(userName);
  };

  return (
    <div className="bg-gray-100 ">
      <Header onSelectGenre={setSelectedGenre} selectedGenre={selectedGenre} />
      <main className="container mx-auto p-4">
        {!gameStarted ? (
          <div className="flex items-center justify-center mt-10">
            <StartButton onStartGame={startGame} />
          </div>
        ) : (
          <>
            <div className="mt-4">
              <Timer timeLeft={timeLeft * 60} onTimeExpired={moveToNextQuestion} />
              <Score score={score} totalQuestionsAnswered={totalQuestionsAnswered} />
            </div>
            <div className="py-4 sm:py-8">
              <div className="flex flex-col items-center justify-center">
                {answerAlert && (
                  <div
                    className={`mt-4 text-center text-lg ${
                      userAnswer === questions[currentQuestionIndex]?.correctAnswer ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {answerAlert}
                  </div>
                )}
                <Question
                  question={questions[currentQuestionIndex]?.question}
                  options={questions[currentQuestionIndex]?.options}
                  onAnswerSelect={handleAnswerSelect}
                  userAnswer={userAnswer}
                />
              </div>
              <div className="mt-4 flex justify-center gap-10 ">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-700 mb-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={moveToNextQuestion}
                >
                  Next Question
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={resetGame}
                >
                  Reset Game
                </button>
              </div>
            </div>
          </>
        )}

        {showGameOverModal && (
          <GameOverModal
            userName={userName}
            score={score}
            totalQuestionsAnswered={totalQuestionsAnswered}
            onClose={handleCloseGameOverModal}
          />
        )}
      </main>
    </div>
  );
}

export default App;
