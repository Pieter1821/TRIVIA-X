import axios from 'axios';

const QuizData = async (genre) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${genre}`
    );
    return response.data.results.map((questionData) => {
      return {
        question: questionData.question,
        options: [
          questionData.correct_answer,
          ...questionData.incorrect_answers,
        ],
        correctAnswer: questionData.correct_answer,
      };
    });
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    return [];
  }
};

export default QuizData;
