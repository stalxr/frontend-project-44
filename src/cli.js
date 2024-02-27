import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let name;
// eslint-disable-next-line import/prefer-default-export
export function userName() {
  // eslint-disable-next-line no-shadow
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
}
export { name };
