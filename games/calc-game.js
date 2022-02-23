import { getRandomInt } from '../src/utility.js';
import { modelFunc } from '../src/index.js';
//  здесь будет описываться логика для first-calc.js

// ******************** логика игры калькулятор *************************

const question = 'What is the result of the expression?';

const operators = ['+', '-'];

const getResult = (int1, int2, operand) => {
    let mathresult = 0;
    if (operand === '-') {
        mathresult = int1 - int2;
    }
    if (operand === '+') {
        mathresult = int1 + int2;
    }
    return mathresult;
};

const createTaskAndResult = () => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const mathtask = `${num1} ${operator} ${num2}`;
    const result = `${getResult(num1, num2, operator)}`;

    return [mathtask, result];
};

export default () => modelFunc(question, createTaskAndResult);