
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';

// askEvenNumber
export default () => {
  const number = getRandomPositive(100);
  const isEven = number % 2 === 0;
  const answer = askQuestion(number);
  const correctAnswer = isEven ? 'yes' : 'no';
  return answerChecker(answer, correctAnswer);
};
