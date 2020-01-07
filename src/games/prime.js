
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';


const isPrime = (num) => {
  if (num > 2 && num % 2 === 0) {
    return false;
  }

  const iter = (div) => {
    if (div === 1) {
      return true;
    }

    if (num % div === 0) {
      return false;
    }

    return iter(div - 1);
  };

  return iter(Math.floor(num / 2));
};

// askPrimeNumber
export default () => {
  const number = getRandomPositive(100) + 1; // starting from 2

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const answer = askQuestion(number);
  return answerChecker(answer, correctAnswer);
};
