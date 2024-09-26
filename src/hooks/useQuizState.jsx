import { useState } from 'react';

const useQuizState = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [answerAlert, setAnswerAlert] = useState(null);
  const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');

  return {
    questions,
    setQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    timeLeft,
    setTimeLeft,
    score,
    setScore,
    userAnswer,
    setUserAnswer,
    answerAlert,
    setAnswerAlert,
    totalQuestionsAnswered,
    setTotalQuestionsAnswered,
    showGameOverModal,
    setShowGameOverModal,
    userName,
    setUserName,
    gameStarted,
    setGameStarted,
    selectedGenre,
    setSelectedGenre,
  };
};

export default useQuizState;