#!/usr/bin/env node

import {
  greetings,
  askName,
  quizPlayer,
} from '../index.js';
import askEvenNumber from '../games/even.js';

// game starts
greetings('Answer "yes" if the number is even, otherwise answer "no".\n');
const name = askName();
// start asking questions till player wins
quizPlayer(name, askEvenNumber);
