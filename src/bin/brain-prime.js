#!/usr/bin/env node

import {
  greetings,
  askName,
  quizPlayer,
} from '../index.js';
import askPrimeNumber from '../games/prime.js';

// game starts
greetings('Answer "yes" if given number is prime. Otherwise answer "no".\n');
const name = askName();
// start asking questions till player wins
quizPlayer(name, askPrimeNumber);
