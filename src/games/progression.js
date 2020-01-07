
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';

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

// askProgressionNumber
export default () => {
  const start = getRandomPositive(maxStartNum);
  const inc = getRandomPositive(maxIncrementor);
  const progLength = progressionLength;
  const hiddenElemIndex = getRandomPositive(progLength) - 1;
  const hiddenElem = start + hiddenElemIndex * inc;
  const progressionStr = printProgression(start, inc, progLength, hiddenElemIndex);

  const correctAnswer = String(hiddenElem);
  const answer = askQuestion(progressionStr);
  return answerChecker(answer, correctAnswer);
};
