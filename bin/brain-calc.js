// eslint-disable-next-line no-unused-vars, , import/extensions
import readlineSync from "readline-sync";
// eslint-disable-next-line import/extensions
import { userName, name } from "../src/cli.js";

function randomCalc(operator, operand1, operand2) {
  // eslint-disable-next-line default-case
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "ё-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
  }
  return operator;
}

function calculator() {
  userName();
  console.log("What is the result of the expression?");
  const operators = ["+", "-", "*"];
  let correctAnswers = 0;
  const numOfQuestions = 3;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numOfQuestions; i++) {
    const operand1 = Math.floor(Math.random() * 100) + 1;
    const operand2 = Math.floor(Math.random() * 100) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `Question: ${operand1} ${operator} ${operand2}`;
    const correctAnswer = randomCalc(operator, operand1, operand2);
    const userAnswer = parseInt(
      readlineSync.question(`${question}\nYour answer: `).toLowerCase(),
      10,
    );

    // eslint-disable-next-line radix
    if (userAnswer === correctAnswer) {
      // eslint-disable-next-line no-alert
      console.log("Correct!");
      // eslint-disable-next-line no-plusplus
      correctAnswers++;
    } else {
      // eslint-disable-next-line no-alert
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
      break;
    }
  }

  if (correctAnswers === numOfQuestions) {
    // eslint-disable-next-line no-alert
    console.log(`Congratulations, ${name}!`);
  }
}
calculator();
