#!/usr/bin/env node

import askName, { askEvenNumber } from '../index.js';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const name = askName();

const NEEDED_ANSWERS = 3;
let correctAnswers = 0;

while (correctAnswers < NEEDED_ANSWERS) {
  const isCorrect = askEvenNumber();
  if (isCorrect) {
    correctAnswers += 1;
  } else {
    console.log(`Let's try again, ${name}!\n`);
  }
}
console.log(`Congratulations, ${name}!\n`);
