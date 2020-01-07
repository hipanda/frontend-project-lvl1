
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';

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
  const start = getRandomPositive(50);
  const inc = getRandomPositive(10);
  const progLength = 10;
  const hiddenElemIndex = getRandomPositive(progLength) - 1;
  const hiddenElem = start + hiddenElemIndex * inc;
  const progressionStr = printProgression(start, inc, progLength, hiddenElemIndex);

  const correctAnswer = String(hiddenElem);
  const answer = askQuestion(progressionStr);
  return answerChecker(answer, correctAnswer);
};
