
import playGame from '../index';
import { makeTask } from '../utils/task';
import random from '../utils/random';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getPrimeTask = () => {
  const number = random(2, 100);

  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return makeTask(question, correctAnswer);
};

export default () => {
  playGame(getPrimeTask, description);
};
