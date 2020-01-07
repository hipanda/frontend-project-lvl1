#!/usr/bin/env node

import {
  greetings,
  askName,
  quizPlayer,
} from '../index.js';
import askProgressionNumber from '../games/progression.js';

// game starts
greetings('What number is missing in the progression?\n');
const name = askName();
// start asking questions till player wins
quizPlayer(name, askProgressionNumber);
