#!/usr/bin/env node

import playGame from '../index.js';
import progression, { rules } from '../games/progression.js';

playGame(progression, rules);
