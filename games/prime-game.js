import getRandomInt from '../src/utility.js';
import modelFunc from '../src/index.js';

//  здесь будет описываться логика для brain-prime.js

// ******************** логика игры проверка на простоту числа *************************

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (int) => {
  let counter = 0;
  for (let i = 1; i <= int; i += 1) {
    if (int % i === 0) {
      counter += 1;
    }
  }
  return counter === 2 ? 'yes' : 'no';
};

const createTaskAndResult = () => {
  const mathtask = getRandomInt(1, 100);
  const result = isPrime(mathtask);
  return [mathtask, result];
};

export default () => modelFunc(question, createTaskAndResult);
