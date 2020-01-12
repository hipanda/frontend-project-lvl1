#!/usr/bin/env node

import playGame from '../index.js';
import calc, { rules } from '../games/calc.js';

playGame(calc, rules);
