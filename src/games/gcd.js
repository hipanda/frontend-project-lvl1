
import { task } from '../utils/task';
import random from '../utils/random';

export const rules = 'Find the greatest common divisor of given numbers.\n';
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
  const num1 = random(1, maxNum);
  const num2 = random(1, maxNum);

  const correctAnswer = String(gcd(num1, num2));
  return task(`${num1} ${num2}`, correctAnswer);
};
