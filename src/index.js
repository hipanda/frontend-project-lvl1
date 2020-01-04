
import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default askName;

export const askEvenNumber = () => {
  const number = Math.round(100 * Math.random());
  const isEven = number % 2 === 0;
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);

  const correctAnswer = isEven ? 'yes' : 'no';
  const isCorrect = answer === correctAnswer;

  if (isCorrect) {
    console.log('Correct!\n');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  }

  return isCorrect;
};
