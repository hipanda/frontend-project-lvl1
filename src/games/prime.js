
import { getRandomPositive } from '../index.js';
import { task } from '../utils/task.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
const maxNum = 100;

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

export default () => {
  const number = getRandomPositive(maxNum) + 1; // starting from 2

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return task(number, correctAnswer);
};
