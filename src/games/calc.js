
import {
  getRandomPositive,
  askQuestion,
  answerChecker,
} from '../index.js';

const operators = ['+', '-', '*'];

const operatorFunc = (op) => {
  switch (op) {
    case '+':
      return (x, y) => x + y;
    case '-':
      return (x, y) => x - y;
    case '*':
      return (x, y) => x * y;
    default:
      console.log('nothing happens');
  }

  return null;
};

// askCalc
export default () => {
  const num1 = getRandomPositive(10);
  const num2 = getRandomPositive(10);
  const opNum = Math.round(Math.random() * (operators.length - 1));
  const op = operators[opNum];
  const opFunc = operatorFunc(op);

  const correctAnswer = String(opFunc(num1, num2));
  const answer = askQuestion(`${num1} ${op} ${num2}`);
  return answerChecker(answer, correctAnswer);
};
