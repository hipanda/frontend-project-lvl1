#!/usr/bin/env node

import playGame from '../index.js';
import prime, { rules } from '../games/prime.js';

playGame(prime, rules);
