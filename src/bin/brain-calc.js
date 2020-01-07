#!/usr/bin/env node

import {
  greetings,
  askName,
  quizPlayer,
} from '../index.js';
import askCalc from '../games/calc.js';

// game starts
greetings('What is the result of the expression?\n');
const name = askName();
// start asking questions till player wins
quizPlayer(name, askCalc);
