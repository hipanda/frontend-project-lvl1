#!/usr/bin/env node

import {
  greetings,
  askName,
  answerChecker,
  quizPlayer,
  askQuestion,
  getRandomPositive,
} from '../index.js';

const isPrime = (num) => {
  if (num > 2 && num % 2 === 0) {
    return false;
  }

  const iter = (div) => {
    if (div === 1) {
      return true;
    }

    if (num % div === 0) {
      return false;
    }

    return iter(div - 1);
  };

  return iter(Math.floor(num / 2));
};

const askPrimeNumber = () => {
  const number = getRandomPositive(100) + 1; // starting from 2

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const answer = askQuestion(number);
  return answerChecker(answer, correctAnswer);
};

// game starts
greetings('Answer "yes" if given number is prime. Otherwise answer "no".\n');
const name = askName();

// start asking questions till player wins
quizPlayer(name, askPrimeNumber);
