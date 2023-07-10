'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const rollDiceButton = document.querySelector('.btn--roll');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Selecting current scores
const player0CurrentScore = document.getElementById('current--0');
const player1CurrentScore = document.getElementById('current--1');

diceImage.classList.add('hidden');

// Reset score when page loads
// const reset = function(){

// Set variables
// Array for Total scores for each player
const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

// Function to reset variables back to the start
const reset = function () {
  scores[0] = 0;
  scores[0] = 0;
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  diceImage.classList.add('hidden');

  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');

  player0Element.classList.remove(`player--winner`);
  player1Element.classList.remove(`player--winner`);
};

reset();

//function to switch player
const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;

  currentScore = 0;

  // Change current player
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  // Toggle which is the current player
  // This will change the CSS to show the user the current player
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Rolling dice functionality
rollDiceButton.addEventListener('click', function () {
  if (playing) {
    //Generate a random dice roll
    const diceScore = Math.trunc(Math.random() * 6) + 1;
    // Display the dice
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${diceScore}.png`;

    // Check if roll is 1
    if (diceScore !== 1) {
      // Add dice to current score
      currentScore += diceScore;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Add functionality to the reset button
btnNew.addEventListener('click', reset);

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's score
  scores[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent =
    scores[currentPlayer];

  // 2. Check if score is >= 100
  if (scores[currentPlayer] >= 25) {
    // Finish the game
    playing = false;
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add(`player--winner`);

    // Remove active player class
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.remove(`player--active`);

    // Hide the dice image
    diceImage.classList.add('hidden');
  }
  // Switch to next player
  switchPlayer();
});
