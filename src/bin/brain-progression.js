#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings,
  askName,
  answerChecker,
  quizPlayer,
  getRandomPositive,
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

const askProgressionNumber = () => {
  const start = getRandomPositive(50);
  const inc = getRandomPositive(10);
  const progLength = 10;
  const hiddenElemIndex = getRandomPositive(progLength) - 1;
  const hiddenElem = start + hiddenElemIndex * inc;
  const progressionStr = printProgression(start, inc, progLength, hiddenElemIndex);

  const correctAnswer = String(hiddenElem);
  const answer = readlineSync.question(`Question: ${progressionStr}\nYour answer: `);
  return answerChecker(answer, correctAnswer);
};

// game starts
greetings('What number is missing in the progression?\n');
const name = askName();

// start asking questions till player wins
quizPlayer(name, askProgressionNumber);
