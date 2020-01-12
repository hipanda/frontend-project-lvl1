
import { getRandomPositive } from '../index.js';
import { task } from '../utils/task.js';

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

export default () => {
  const start = getRandomPositive(maxStartNum);
  const inc = getRandomPositive(maxIncrementor);
  const progLength = progressionLength;
  const hiddenElemIndex = getRandomPositive(progLength) - 1;
  const hiddenElem = start + hiddenElemIndex * inc;
  const progressionStr = printProgression(start, inc, progLength, hiddenElemIndex);

  const correctAnswer = String(hiddenElem);
  return task(progressionStr, correctAnswer);
};
