#!/usr/bin/env node
import readlineSync from "readline-sync";
// eslint-disable-next-line import/extensions
import { userName, name } from "../src/cli.js";
import randomNumber from "../src/utils/randomnum.js"

function generateArithmeticProgression() {
  const length = randomNumber(5, 11)
  const hiddenIndex = randomNumber(0, length - 1);

  let firstNumber = randomNumber(1);
  const step = randomNumber(1, 11)
  const progression = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < length; i++) {
    progression.push(firstNumber)
    firstNumber += step
  }
  const missingNumber = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  return { progression, missingNumber }
}

function startGameProgression() {
  userName();
  console.log('What number is missing in the progression?');
  let correctAnswers = 0;
  // eslint-disable-next-line no-constant-condition
  while (correctAnswers < 3) {
    const { progression, missingNumber } = generateArithmeticProgression();

    console.log('Question:', progression.join(' '));

    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === missingNumber) {
      correctAnswers += 1;
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
