#!/usr/bin/env node

import playGame from '../index.js';
import even, { rules } from '../games/even.js';

playGame(even, rules);
