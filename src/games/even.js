
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';

const maxNum = 100;

// askEvenNumber
export default () => {
  const number = getRandomPositive(maxNum);
  const isEven = number % 2 === 0;
  const answer = askQuestion(number);
  const correctAnswer = isEven ? 'yes' : 'no';
  return answerChecker(answer, correctAnswer);
};
