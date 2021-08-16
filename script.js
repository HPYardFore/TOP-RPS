// Declare variables to hold score for current game
let playerScore = 0;
let cpuScore = 0;
let message = '';

// Declare variable for # of rounds
let rounds = 5;

// declare constants for changing score in <span> elements
const player = document.querySelector('#playerScore');
const computer = document.querySelector('#cpuScore');

// Set random computer selection before player selection

const computerPlay = () => {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randChoice = Math.floor(Math.random() * 3);
  let result = choices[randChoice];
  return result;
};

// Identify which button was selected and pass into playRound function
const playerButtons = document.querySelectorAll('button');
playerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.value);
  });
});

function playRound(playerSelection) {
  computerSelection = computerPlay();
  console.log(playerSelection, computerSelection);
  // Handle Tie Game
  if (playerSelection === computerSelection) {
    tieGame();
  }
  // Game Logic
  // Paper beats Rock

  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerWin();
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerWin();
  }

  // Rock beats Scissors
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerWin();
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerWin();
  }

  // Scissors beats Paper
  if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerWin();
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerWin();
  }
}

function playerWin() {
  playerScore++;
  player.textContent = playerScore;
}

function computerWin() {
  cpuScore++;
  computer.textContent = cpuScore;
}

function tieGame() {}
