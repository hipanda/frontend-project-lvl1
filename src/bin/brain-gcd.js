#!/usr/bin/env node

import playGame from '../index';
import gcd, { rules } from '../games/gcd';

playGame(gcd, rules);
