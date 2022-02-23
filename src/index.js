import readlineSync from 'readline-sync';


// ******************** Описание шаблона-модели игры *************************

export const modelFunc = (questionReplic, createTaskAndResult) => {

    let counter = 0;

    console.log('Welcome to Brain Games!');
    const name = readlineSync.question('Enter your name: ');
    console.log(`Hello, ${name}!`);

    for (let i = 0; i < 3; i++) {
        const [mathtask, result] = createTaskAndResult();

        console.log(questionReplic);
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


}