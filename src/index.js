
import readlineSync from 'readline-sync';
import { getQuest, getKey } from './utils/task';

// number of correct answers to win. common for all games
const answersToWin = 3;

// playGame
export default (gameTaskFunc, rules) => {
  // greetigns
  console.log('\nWelcome to the Brain Games!');
  // ask name
  const name = readlineSync.question('What\'s your name? ');
  console.log(`Hello, ${name}!\n`);

  console.log(`${rules}\n`);

  let correctAnswersNum = 0;
  while (correctAnswersNum < answersToWin) {
    const task = gameTaskFunc();
    const correctAnswer = getKey(task);
    const playerAnswer = readlineSync.question(`Question: ${getQuest(task)}\nYour answer: `);

    const isCorrect = correctAnswer === playerAnswer;

    if (isCorrect) {
      correctAnswersNum += 1;
      console.log('Correct!\n');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!\n`);
      return false;
    }
  }

  return console.log(`Congratulations, ${name}!\n`);
};
