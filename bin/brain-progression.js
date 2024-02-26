import readlineSync from "readline-sync";
// eslint-disable-next-line import/extensions
import { userName, name } from "../src/cli.js";

function generateArithmeticProgression() {
  const length = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * length);

  const progression = [];
  let missingNumber;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    const number = (i + 1) * 2 + 1;

    if (i === hiddenIndex) {
      progression.push('..');
      missingNumber = number;
    } else {
      progression.push(number);
    }
  }

  return { progression, missingNumber };
}

function startGameProgression() {
  userName()
  console.log('What number is missing in the progression?');
  const correctAnswers = 0
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { progression, missingNumber } = generateArithmeticProgression();

    console.log('Question:', progression.join(' '));

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === missingNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

startGameProgression()
