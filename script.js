// Declare variables to hold score for current game
let playerScore = 0;
let cpuScore = 0;
let gameOver = false;

// Declare variable for # of rounds - default to 5
let rounds = 5;

// declare constants for changing score in <span> elements
const player = document.querySelector('#playerScore');
const computer = document.querySelector('#cpuScore');

// declare constant for changing game status messages
const gameMessages = document.querySelector('.gameMessages');
const message = document.querySelector('.results');
const roundCount = document.querySelector('.numRounds');
const finalMessage = document.querySelector('.gameOver');

// Change # of rounds

const gameRounds = document.querySelectorAll('.rounds');
gameRounds.forEach((button) => {
  button.addEventListener('click', () => {
    rounds = button.value;
    roundCount.textContent = `Best out of ${rounds}!`;
    message.textContent = `Game Reset! New game, best of ${rounds} wins!`;
    resetGame();
  });
});

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  gameOver = false;
  player.textContent = playerScore;
  computer.textContent = cpuScore;
  finalMessage.textContent = ``;
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
    if (gameOver) {
      resetGame();
    }
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

function checkWinner() {
  let checkScore = rounds * 0.5;
  if (playerScore > checkScore) {
    finalMessage.textContent = `Congratulations! You Won!`;
    gameOver = true;
  } else if (cpuScore > checkScore) {
    finalMessage.textContent = `You lost! Try Again!`;
    gameOver = true;
  }
}

function playerWin(a, b) {
  playerScore++;
  player.textContent = playerScore;
  message.textContent = `You won this round! 
  ${a} beats ${b}!`;
  checkWinner();
}

function computerWin(a, b) {
  cpuScore++;
  computer.textContent = cpuScore;
  message.textContent = `You lost this round! ${b} beats ${a}!`;
  checkWinner();
}

function tieGame(a, b) {
  message.textContent = `Tie Game!! ${a} matches ${b}!`;
}
