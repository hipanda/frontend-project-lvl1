
import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils/task';

// number of correct answers to win. common for all games
const answersToWin = 3;

// playGame
export default (getGameTask, description) => {
  // greetigns
  console.log('\nWelcome to the Brain Games!');
  // ask name
  const name = readlineSync.question('What\'s your name? ');
  console.log(`Hello, ${name}!\n`);

  console.log(`${description}\n`);

  for (let i = 0; i < answersToWin; i += 1) {
    const task = getGameTask();
    const correctAnswer = getAnswer(task);
    const playerAnswer = readlineSync.question(`Question: ${getQuestion(task)}\nYour answer: `);
    const isCorrect = correctAnswer === playerAnswer;

    if (isCorrect) {
      console.log('Correct!\n');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!\n`);
};
