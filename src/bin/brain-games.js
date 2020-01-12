#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('\nWelcome to the Brain Games!');
const name = readlineSync.question('What\'s is your name? ');
console.log(`Hello, ${name}!\n`);
