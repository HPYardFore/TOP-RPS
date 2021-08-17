// Declare variables to hold score for current game
let playerScore = 0;
let cpuScore = 0;

// Declare variable for # of rounds - default to 5
let rounds = 5;

// declare constants for changing score in <span> elements
const player = document.querySelector('#playerScore');
const computer = document.querySelector('#cpuScore');

// declare contast for changing game status messages
const message = document.querySelector('.results');

// Change # of rounds

const gameRounds = document.querySelectorAll('.rounds');
gameRounds.forEach((button) => {
  button.addEventListener('click', () => {
    resetGame(button.value);
    console.log(rounds);
    message.textContent = `Game Reset! New game, best of ${rounds} wins!`;
    // reset scores back to 0
  });
});

function resetGame(num) {
  playerScore = 0;
  cpuScore = 0;
  rounds = num;
  player.textContent = playerScore;
  computer.textContent = cpuScore;
}

// Set random computer selection before player selection
const computerPlay = () => {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randChoice = Math.floor(Math.random() * 3);
  let result = choices[randChoice];
  return result;
};

// Identify which button was selected and pass into playRound function
const playerButtons = document.querySelectorAll('button.player');
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
    tieGame(playerSelection, computerSelection);
  }
  // Game Logic
  // Paper beats Rock

  if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerWin(playerSelection, computerSelection);
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerWin(playerSelection, computerSelection);
  }

  // Rock beats Scissors
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    playerWin(playerSelection, computerSelection);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerWin(playerSelection, computerSelection);
  }

  // Scissors beats Paper
  if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerWin(playerSelection, computerSelection);
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerWin(playerSelection, computerSelection);
  }
}

function playerWin(a, b) {
  playerScore++;
  player.textContent = playerScore;
  message.textContent = `You won this round! 
  ${a} beats ${b}!`;
}

function computerWin(a, b) {
  cpuScore++;
  computer.textContent = cpuScore;
  message.textContent = `You lost this round! \r 
  ${b} beats ${a}!`;
}

function tieGame(a, b) {
  message.textContent = `Tie Game, try again! \r
  ${a} matches ${b}!`;
}
