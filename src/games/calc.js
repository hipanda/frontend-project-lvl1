
import playGame from '../index';
import { task } from '../utils/task';
import random from '../utils/random';

export const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const operationProc = (op) => {
  switch (op) {
    case '+':
      return (x, y) => x + y;
    case '-':
      return (x, y) => x - y;
    case '*':
      return (x, y) => x * y;
    default:
      console.log('unknow operator');
      return null;
  }
};

const calc = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operatorIndex = random(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const operatorFunction = operationProc(operator);

  const correctAnswer = String(operatorFunction(num1, num2));
  return task(`${num1} ${operator} ${num2}`, correctAnswer);
};

export default () => {
  playGame(calc, rules);
};
