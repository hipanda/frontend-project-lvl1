#!/usr/bin/env node

import askName, { askEvenNumber } from '../index.js';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const name = askName();

const NEEDED_ANSWERS = 3;

const iterQuestion = (correctAnswers) => {
  if (correctAnswers === NEEDED_ANSWERS) {
    return console.log(`Congratulations, ${name}!\n`);
  }

  const isCorrect = askEvenNumber();
  if (isCorrect) {
    return iterQuestion(correctAnswers + 1);
  }

  console.log(`Let's try again, ${name}!\n`);
  return iterQuestion(correctAnswers);
};

iterQuestion(0);
