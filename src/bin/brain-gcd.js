#!/usr/bin/env node

import {
  greetings,
  askName,
  quizPlayer,
} from '../index.js';
import askGCD from '../games/gcd.js';

// game starts
greetings('Find the greatest common divisor of given numbers.\n');
const name = askName();

// start asking questions till player wins
quizPlayer(name, askGCD);
