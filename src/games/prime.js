
import playGame from '../index';
import { task } from '../utils/task';
import random from '../utils/random';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

const prime = () => {
  const number = random(2, maxNum);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return task(number, correctAnswer);
};

export default () => {
  playGame(prime, rules);
};
