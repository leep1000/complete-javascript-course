'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');

// Selecting current scores
const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');

// Set variables
let diceScore = (score0El.textContent = 0);
let currentPlayer = 1;

diceImage.classList.add('hidden');

function rollDice() {
  if (currentPlayer === 1) {
    diceScore = Math.trunc(Math.random() * 6) + 1;
    console.log(diceScore);
    player1CurrentScore.textContent =
      +player1CurrentScore.textContent + diceScore;
    diceImage.src = `dice-${diceScore}.png`;
  } else {
    diceScore = Math.trunc(Math.random() * 6) + 1;
    console.log(diceScore);
    player2CurrentScore.textContent =
      +player2CurrentScore.textContent + diceScore;
    diceImage.src = `dice-${diceScore}.png`;
  }

  if (diceScore === 1 && currentPlayer === 1) {
    player1CurrentScore.textContent = 0;
    currentPlayer = 2;
  } else if (diceScore === 1 && currentPlayer === 2) {
    player2CurrentScore.textContent = 0;
    currentPlayer = 1;
  }
}

rollDiceButton.addEventListener('click', rollDice);
