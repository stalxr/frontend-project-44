#!/usr/bin/env node
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import { name, userName } from '../src/cli.js';
import randomNumber from '../src/utils/randomnum.js';

const isEven = (number) => number % 2 === 0;

// eslint-disable-next-line no-unused-vars
function playGame() {
  userName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const number = randomNumber(1, 100);
    // eslint-disable-next-line no-shadow
    console.log(`Question: ${number}`);
    // eslint-disable-next-line no-undef
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      correctAnswers++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.`);
      // eslint-disable-next-line no-restricted-globals
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
playGame();
