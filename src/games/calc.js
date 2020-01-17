
import playGame from '../index';
import { makeTask } from '../utils/task';
import random from '../utils/random';

export const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return null;
  }
};

const getCalcTask = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operatorIndex = random(0, operators.length - 1);
  const operator = operators[operatorIndex];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(operator, num1, num2));
  return makeTask(question, correctAnswer);
};

export default () => {
  playGame(getCalcTask, description);
};
