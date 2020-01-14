
import playGame from '../index';
import { task } from '../utils/task';
import random from '../utils/random';

export const rules = 'What number is missing in the progression?\n';
const maxStartNum = 50;
const maxIncrementor = 10;
const progressionLength = 10;

const printProgression = (start, inc, length, hidden) => {
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
  const start = random(1, maxStartNum);
  const inc = random(2, maxIncrementor);
  const progLength = progressionLength;
  const hiddenElemIndex = random(0, progLength - 1);
  const hiddenElem = start + hiddenElemIndex * inc;
  const progressionStr = printProgression(start, inc, progLength, hiddenElemIndex);

  const correctAnswer = String(hiddenElem);
  return task(progressionStr, correctAnswer);
};

export default () => {
  playGame(progression, rules);
};