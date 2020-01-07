#!/usr/bin/env node

import {
  greetings,
  askName,
  answerChecker,
  quizPlayer,
  askQuestion,
  getRandomPositive,
} from '../index.js';

const gcd = (num1, num2) => {
  const larger = num1 > num2 ? num1 : num2;
  const smaller = num1 > num2 ? num2 : num1;

  if (larger % smaller === 0) {
    return smaller;
  }

  return gcd(smaller, larger % smaller);
};

const askGCD = () => {
  const num1 = getRandomPositive(100);
  const num2 = getRandomPositive(100);

  const correctAnswer = String(gcd(num1, num2));
  const answer = askQuestion(`${num1} ${num2}`);
  return answerChecker(answer, correctAnswer);
};

// game starts
greetings('Find the greatest common divisor of given numbers.\n');
const name = askName();

// start asking questions till player wins
quizPlayer(name, askGCD);
