import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { userName, name } from '../cli.js';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const playGamePrime = () => {
  userName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isNumberPrime = isPrime(number);
    const correctAnswer = isNumberPrime ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      correctAnswers++;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGamePrime;
