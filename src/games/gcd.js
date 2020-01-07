
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';

const maxNum = 100;

const gcd = (num1, num2) => {
  const larger = num1 > num2 ? num1 : num2;
  const smaller = num1 > num2 ? num2 : num1;

  if (larger % smaller === 0) {
    return smaller;
  }

  return gcd(smaller, larger % smaller);
};

// askGCD
export default () => {
  const num1 = getRandomPositive(maxNum);
  const num2 = getRandomPositive(maxNum);

  const correctAnswer = String(gcd(num1, num2));
  const answer = askQuestion(`${num1} ${num2}`);
  return answerChecker(answer, correctAnswer);
};
