#!/usr/bin/env node

import playGame from '../index';
import progression, { rules } from '../games/progression';

playGame(progression, rules);
