let playerSelection = '';
let computerSelection = '';
let message = '';
let r = 'ROCK';
let p = 'PAPER';
let s = 'SCISSORS';

function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randChoice = Math.floor(Math.random() * 3);
  let result = choices[randChoice];
  return result;
}

function playerSelect() {
  playerSelection = window.prompt(
    'Rock, Paper, Scissors! Type your selection to play!',
    'Rock'
  );
  playerSelection = playerSelection.toString().toUpperCase().trim();
  if (playerSelection === r || playerSelection === s || playerSelection === p) {
    return playerSelection;
  } else {
    playerSelection = window.prompt(
      `Invalid entry! Please type ${r}, ${p}, or ${s} to try again!`,
      'Rock'
    );
    playerSelection = playerSelection.toString().toUpperCase().trim();
    return playerSelection;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelect();
    // console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  function playRound(playerSelection, computerSelection) {
    // Convert player and random computer choice to uppercase for logic comparisons

    // playerSelection = playerSelection.toString().toUpperCase().trim();
    computerSelection = computerSelection.toString().toUpperCase().trim();

    // Check player input for invalid entries

    // Handle Tie Game
    if (playerSelection === computerSelection) {
      return (message = `Tie Game! ${playerSelection} ties with ${computerSelection}! Please try again!`);
    }

    // Game Logic
    // Paper beats Rock

    if (playerSelection === p && computerSelection === r) {
      return (message = `You Win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === r && computerSelection === p) {
      return (message = `You Lost! ${computerSelection} beats ${playerSelection}`);
    }

    // Rock beats Scissors
    if (playerSelection === r && computerSelection === s) {
      return (message = `You Win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === s && computerSelection === r) {
      return (message = `You Lost! ${computerSelection} beats ${playerSelection}`);
    }

    // Scissors beats Paper
    if (playerSelection === s && computerSelection === p) {
      return (message = `You Win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === p && computerSelection === s) {
      return (message = `You Lost! ${computerSelection} beats ${playerSelection}`);
    }
  }
}

game();
