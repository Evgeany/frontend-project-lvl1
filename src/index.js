import readlineSync from 'readline-sync';

// ******************** Описание шаблона-модели игры *************************

export default (questionReplic, createTaskAndResult) => {
  let counter = 0;

  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('Enter your name: ');
  console.log(`Hello, ${name}!`);
  console.log(questionReplic);

  for (let i = 0; i < 3; i += 1) {
    const [mathtask, result] = createTaskAndResult();

    console.log(`Question: ${mathtask}`);

    const usersAnswer = readlineSync.question('Your answer: ');

    if (result === usersAnswer) {
      console.log('Correct !');
      counter += 1;
    }

    if (result !== usersAnswer) {
      console.log(`${usersAnswer} is wrong answer ;(. Correct answer was ${result}.
    Let's try again, ${name}!`);
      break;
    }
  }
  if (counter === 3) { console.log(`Congratulations, ${name}!`); }
};
