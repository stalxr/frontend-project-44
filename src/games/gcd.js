import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import { userName, name } from '../cli.js';

const gcd = (a, b) => {
  let number1 = a;
  let number2 = b;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return (number1 + number2);
};

const playGameGcd = () => {
  userName();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  const numQuestions = 3;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numQuestions; i++) {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${a} ${b}`);
    // eslint-disable-next-line no-alert
    const userAnswer = parseInt(readlineSync.question('Your answer: ').toLowerCase(), 10);

    if (userAnswer === gcd(a, b)) {
      console.log("Correct!");
      // eslint-disable-next-line no-plusplus
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcd(a, b)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === numQuestions) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default playGameGcd;
