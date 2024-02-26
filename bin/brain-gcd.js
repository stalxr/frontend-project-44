import readlineSync from "readline-sync";
// eslint-disable-next-line import/extensions
import { userName, name } from '../src/cli.js';

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    // eslint-disable-next-line no-param-reassign
    b = a % b;
    // eslint-disable-next-line no-param-reassign
    a = temp;
  }
  return a;
}

function playGameGcd() {
  userName();
  console.log("Find the greatest common divisor of given numbers.");

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
}

playGameGcd();
