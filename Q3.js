const prompt = require("prompt-sync")({ sigint: true });
let reverse = 0;
let number = prompt("What is your number?");
let lastDigit;

while (number != 0) {
  lastDigit = number % 10;
  reverse = reverse * 10 + lastDigit;
  number = Math.floor(number / 10);
}

console.log("Reverse number: " + reverse);
