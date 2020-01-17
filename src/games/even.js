
import playGame from '../index';
import { makeTask } from '../utils/task';
import random from '../utils/random';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getEvenTask = () => {
  const number = random(1, 100);

  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return makeTask(question, correctAnswer);
};

export default () => {
  playGame(getEvenTask, description);
};
