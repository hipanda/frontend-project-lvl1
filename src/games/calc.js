
import { getRandomPositive } from '../index.js';
import { task } from '../utils/task.js';

export const rules = 'What is the result of the expression?\n';
const operators = ['+', '-', '*'];
const maxNum = 10;

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

export default () => {
  const num1 = getRandomPositive(maxNum);
  const num2 = getRandomPositive(maxNum);
  const opNum = Math.round(Math.random() * (operators.length - 1));
  const op = operators[opNum];
  const opFunc = operatorFunc(op);

  const correctAnswer = String(opFunc(num1, num2));
  return task(`${num1} ${op} ${num2}`, correctAnswer);
};
