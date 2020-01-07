
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';

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
  const num1 = getRandomPositive(100);
  const num2 = getRandomPositive(100);

  const correctAnswer = String(gcd(num1, num2));
  const answer = askQuestion(`${num1} ${num2}`);
  return answerChecker(answer, correctAnswer);
};
