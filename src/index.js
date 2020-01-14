
import readlineSync from 'readline-sync';
import { getQuest, getKey } from './utils/task';

// number of correct answers to win. common for all games
const answersToWin = 3;

// common question iterator
const quizPlayer = (playerName, taskFunc, correctAnswersNum = 0) => {
  if (correctAnswersNum === answersToWin) {
    return console.log(`Congratulations, ${playerName}!\n`);
  }

  const task = taskFunc();
  const correctAnswer = getKey(task);
  const playerAnswer = readlineSync.question(`Question: ${getQuest(task)}\nYour answer: `);

  const isCorrect = correctAnswer === playerAnswer;
  if (isCorrect) {
    console.log('Correct!\n');
    return quizPlayer(playerName, taskFunc, correctAnswersNum + 1);
  }

  console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${playerName}!\n`);
  return false;
};

// playGame
export default (game, rules) => {
  // greetigns
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  // ask name
  const name = readlineSync.question('What\'s is your name? ');
  console.log(`Hello, ${name}!\n`);

  quizPlayer(name, game);
};
