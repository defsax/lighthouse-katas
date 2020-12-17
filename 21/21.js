//set max number in range
const MAX_NUM = 100;

let prompt = require('prompt-sync')();

let randomNum = Math.floor(Math.random() * MAX_NUM + 1);
let guess;
let attempts = 1;
let previousNumbers = [];


while(guess !== randomNum){
  console.log('\nGuess a number between 1 & ' + MAX_NUM + ':');
  guess = prompt('# ');

  if(isNaN(Number(guess))){
    console.log('You didn\'t enter a number. Please try again.');
    continue;
  } else if(guess < 1 || guess > MAX_NUM){
    console.log('Your number is outside the range. Please try again.');
    continue;
  }

  if(guess < randomNum){
    console.log('\nYou guessed: ' + guess + '. Too low!');
  } else if(guess > randomNum){
    console.log('\nYou guessed: ' + guess + '. Too high!');
  } else if(guess == randomNum){
    console.log('\nYou guessed the number! The number was ' + randomNum + '.');
    console.log('It took you ' + attempts + ' attempt(s).');
    break;
  }

  if(previousNumbers.includes(guess)){
    console.log('You already entered a ' + guess + '.');
  }
  else{
    previousNumbers.push(guess);
    attempts++;
  }
}