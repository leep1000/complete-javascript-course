'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';

document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '1';

document.querySelector('.guess').value = 21;

*/

// define secret number which defined as the page starts
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// define score to use it later (state variable)
let score = 20;

// define highscore to use it when the user has a higher score
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function x() {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number selected ⛔';
    displayMessage('⛔ No number selected ⛔');
  }

  // If player wins the game
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number 🎉';
    displayMessage('Correct Number 🎉');
    // document.querySelector('.number').textContent = secretNumber;
    displayMessage(secretNumber);
    //change CSS style
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Change width of number
    document.querySelector('.number').style.width = '30rem';

    // set highscore, which isn't reset once again button is clicked
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess if wrong
  } else if (guess !== secretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    //document.querySelector('.message').textContent =
    displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
  } else {
    displayMessage('You lost the game 😭');
    document.querySelector('.score').textContent = 0;
  }
}

/* Refactored code. Simplified above by checking if secretNumber is the same as guess, 
then using the ternary operator to determine what the text content of '.message' will be

  // If player guesses too high
  else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high! 📈';
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }

  // If player guesses too low
  else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low! 📉';
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
}
*/
document.querySelector('.check').addEventListener('click', x);

// If player clicks the again button

function clickAgain() {
  //generate new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // reset values
  document.querySelector('.number').textContent = '?';
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = null;

  // reset score to 20 again
  document.querySelector('.score').textContent = score;

  // set style back to previous
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  console.log('again', secretNumber);
}

document.querySelector('.again').addEventListener('click', clickAgain);
