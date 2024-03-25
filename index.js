#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number.
//  2) user input for guessing number.
//  3) compare the guessed number with random num and show result
const randomnumber = Math.floor(Math.random() * 20 + 1); // generates a random decimal between 0 -
console.log("Welllcome to number guessing game");
// let guess;
const answers = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1 - 20: ",
    },
]);
if (answers.userGuessNumber === randomnumber) {
    console.log("Congratulation you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
