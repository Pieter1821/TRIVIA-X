import axios from 'axios';

const QuizData = async (genre) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${genre}`
    );
    
    console.log('API Response:', response.data);

    const questions = response.data.results.map((questionData) => {
      return {
        question: questionData.question,
        options: [
          questionData.correct_answer,
          ...questionData.incorrect_answers,
        ],
        correctAnswer: questionData.correct_answer,
      };
    });

    console.log('Transformed Questions:', questions);

    return questions;
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    return [];
  }
};

export default QuizData;
