import  { useState, useEffect } from 'react';
import QuizData from '../utils/quizdata';
import Question from './components/Question';
import Score from './components/Score';
import GameOverModal from './components/GameOverModal';


function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [selectedDifficulty,setSelectedDifficulty] = useState('');
  const [userName] = useState('Pieter Deane');

  useEffect(() => {
    async function fetchData() {
      const data = await QuizData('9');
      setQuestions(data.slice(0, 20)); 
    }
    fetchData();
  }, [selectedDifficulty]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setTotalQuestionsAnswered(prevTotal => prevTotal + 1);
    if (currentQuestionIndex < 19) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setShowGameOverModal(true);
    }
  };

  const handleCloseGameOverModal = () => {
    setShowGameOverModal(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTotalQuestionsAnswered(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trivia Game</h1>
      </header>
      <main>
        {questions.length > 0 && currentQuestionIndex < 20 && (
          <>
            <Question
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
            <Score score={score} totalQuestionsAnswered={totalQuestionsAnswered} />
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