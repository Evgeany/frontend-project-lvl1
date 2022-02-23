import getRandomInt from '../src/utility.js';
import modelFunc from '../src/index.js';

//  здесь будет описываться логика для first-even.js

// ******************** логика игры на четность *************************

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const createTaskAndResult = () => {
    const mathtask = getRandomInt(1, 100);
    const result = mathtask % 2 === 0 ? 'yes' : 'no';

    return [mathtask, result];
};

export default () => modelFunc(question, createTaskAndResult);