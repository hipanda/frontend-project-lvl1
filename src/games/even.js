
import playGame from '../index';
import { task } from '../utils/task';
import random from '../utils/random';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const number = random(1, 100);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return task(number, correctAnswer);
};

export default () => {
  playGame(even, rules);
};
