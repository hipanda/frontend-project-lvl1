
import readlineSync from 'readline-sync';

// number of correct answers to win. common for all games
const answersToWin = 3;

// meet a player
export const greetings = (gameIntroStr = '') => {
  console.log('\nWelcome to the Brain Games!');
  if (gameIntroStr.length > 0) {
    console.log(gameIntroStr);
  }
};

// ask player's name and return it
export const askName = () => {
  const name = readlineSync.question('What\'s is your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

// common answer check
export const answerChecker = (answer, correctAnswer) => {
  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    console.log('Correct!\n');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  }

  return isCorrect;
};

// common question iterator
export const quizPlayer = (playerName, questionFunc, correctAnswers = 0) => {
  if (correctAnswers === answersToWin) {
    return console.log(`Congratulations, ${playerName}!\n`);
  }
  const isCorrect = questionFunc();
  if (isCorrect) {
    return quizPlayer(playerName, questionFunc, correctAnswers + 1);
  }

  console.log(`Let's try again, ${playerName}!\n`);
  return quizPlayer(playerName, questionFunc, correctAnswers);
};

export const askQuestion = (q) => readlineSync.question(`Question: ${q}\nYour answer: `);

export const getRandomPositive = (max) => Math.round(Math.random() * (max - 1)) + 1;
