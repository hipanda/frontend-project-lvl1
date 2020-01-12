
import { task } from '../utils/task.js';
import random from '../utils/random.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
const maxNum = 100;

export default () => {
  const number = random(1, maxNum);
  const isEven = number % 2 === 0;

  const correctAnswer = isEven ? 'yes' : 'no';
  return task(number, correctAnswer);
};
