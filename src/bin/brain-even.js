#!/usr/bin/env node

import playGame from '../index';
import even, { rules } from '../games/even';

playGame(even, rules);
