#!/usr/bin/env node

import playGame from '../index';
import calc, { rules } from '../games/calc';

playGame(calc, rules);
