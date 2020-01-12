#!/usr/bin/env node

import playGame from '../index.js';
import gcd, { rules } from '../games/gcd.js';

playGame(gcd, rules);
