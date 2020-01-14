
import playGame from '../index';
import { task } from '../utils/task';
import random from '../utils/random';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const number = random(1, 100);
  const isEven = number % 2 === 0;

  const correctAnswer = isEven ? 'yes' : 'no';
  return task(number, correctAnswer);
};

export default () => {
  playGame(even, rules);
};
