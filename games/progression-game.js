import getRandomInt from '../src/utility.js';
import modelFunc from '../src/index.js';

const question = 'What number is missing in the progression?';

const getProgression = (startValue, growValue) => {
  const progression = [];

  for (let i = startValue; i <= startValue + 15; i += growValue) {
    progression.push(i);
  }

  progression[getRandomInt(1, progression.length - 2)] = '..';

  return progression;
};

const getResult = (arr, growValue) => {
  let result = 0;

  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (arr[i] === '..') { result = arr[i + 1] - growValue; }
  }

  return result;
};

const createTaskAndResult = () => {
  const startValue = getRandomInt();
  const growValue = getRandomInt(1, 3);
  const mathtask = getProgression(startValue, growValue);
  const result = getResult(mathtask, growValue).toString();

  return [mathtask.join(' '), result];
};

export default () => modelFunc(question, createTaskAndResult);
