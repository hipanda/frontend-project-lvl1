#!/usr/bin/env node

import {
  greetings,
  askName,
  answerChecker,
  quizPlayer,
  askQuestion,
  getRandomPositive,
} from '../index.js';

// task for even-game
const askEvenNumber = () => {
  const number = getRandomPositive(100);
  const isEven = number % 2 === 0;
  const answer = askQuestion(number);
  const correctAnswer = isEven ? 'yes' : 'no';
  return answerChecker(answer, correctAnswer);
};

// game starts
greetings('Answer "yes" if the number is even, otherwise answer "no".\n');
const name = askName();
// start asking questions till player wins
quizPlayer(name, askEvenNumber);
