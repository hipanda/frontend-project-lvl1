
import playGame from '../index';
import { task } from '../utils/task';
import random from '../utils/random';

export const rules = 'What number is missing in the progression?';
const maxIncrementor = 10;
const progressionLength = 10;

const genProgression = (start, inc, length, hidden) => {
  let str = '';
  for (let i = 0; i < length; i += 1) {
    if (i === hidden) {
      str = `${str} ..`;
    } else {
      str = `${str} ${start + inc * i}`;
    }
  }
  return str;
};

const progression = () => {
  const start = random(1, 50);
  const step = random(2, maxIncrementor);
  const hiddenItemIndex = random(0, progressionLength - 1);
  const hiddenItem = start + hiddenItemIndex * step;
  const progressionWithHiddenItem = genProgression(start, step, progressionLength, hiddenItemIndex);

  const correctAnswer = String(hiddenItem);
  return task(progressionWithHiddenItem, correctAnswer);
};

export default () => {
  playGame(progression, rules);
};
