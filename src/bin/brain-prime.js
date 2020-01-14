#!/usr/bin/env node

import playGame from '../index';
import prime, { rules } from '../games/prime';

playGame(prime, rules);
