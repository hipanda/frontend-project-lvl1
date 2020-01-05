#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greetings,
  askName,
  answerChecker,
  quizPlayer,
} from '../index.js';

// task for even-game
const askEvenNumber = () => {
  const number = Math.round(100 * Math.random());
  const isEven = number % 2 === 0;
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  const correctAnswer = isEven ? 'yes' : 'no';
  return answerChecker(answer, correctAnswer);
};

// game starts
greetings('Answer "yes" if the number is even, otherwise answer "no".\n');
const name = askName();
// start asking questions till player wins
quizPlayer(name, askEvenNumber);
