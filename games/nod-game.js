import getRandomInt from '../src/utility.js';
import modelFunc from '../src/index.js';
//  здесь будет описываться логика для first-calc.js

// ******************** логика игры НОД *************************

const question = 'Find the greatest common divisor of given numbers.';

const createTaskAndResult = () => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();

    const minNum = Math.min(num1, num2);
    const maxNum = Math.max(num1, num2);

    const mathtask = `${num1} ${num2}`;

    let result = 0;

    const minDividers = [];

    for (let i = 1; i <= minNum; i += 1) {
        if (minNum % i === 0) {
            minDividers.push(i);
        }
    }

    for (let i = 0; i <= minDividers.length - 1; i += 1) {
        if (maxNum % minDividers[i] === 0 && minDividers[i] > result) {
            result = minDividers[i];
        }
    }

    return [mathtask, result];
};

export default () => modelFunc(question, createTaskAndResult);