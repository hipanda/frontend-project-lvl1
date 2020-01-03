
import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
};

export default askName;
