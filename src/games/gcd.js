
import playGame from '../index';
import { makeTask } from '../utils/task';
import random from '../utils/random';

export const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

// askGCD
const getGCDTask = () => {
  const num1 = random(1, 100);
  const num2 = random(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return makeTask(question, correctAnswer);
};

export default () => {
  playGame(getGCDTask, description);
};
