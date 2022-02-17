import readlineSync from 'readline-sync';
import { greetingPhrase, getName } from './cli.js';

export const isEvenQuestion = () => {
    let counter = 0;

    console.log(greetingPhrase);
    const name = getName();
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    for (let i = 3; i > 0; i -= 1) {
        const item = getRandomInt(1, 100);

        console.log(`Question: ${item}`);

        const answer = readlineSync.question('Your answer:');

        if ((item % 2 === 0 && answer === 'yes') || (item % 2 === 0 && answer === 'Yes')) {
            console.log('Correct!');
            counter += 1;
        } else if ((item % 2 === 0 && answer !== 'yes') || (item % 2 === 0 && answer !== 'Yes')) {
            (console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}`));
            break;
        }

        if ((item % 2 !== 0 && answer === 'no') || (item % 2 !== 0 && answer === 'No')) {
            console.log('Correct!');
            counter += 1;
        } else if ((item % 2 !== 0 && answer !== 'no') || (item % 2 !== 0 && answer !== 'No')) {
            (console.log(`${answer} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}`));
            break;
        }
    }
    if (counter === 3) { console.log(`Congratulations, ${name}!`); }
};

export default isEvenQuestion;