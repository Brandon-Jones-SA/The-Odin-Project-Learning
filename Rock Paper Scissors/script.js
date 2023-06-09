const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let userChoice;
let computerScore = 0;
let playerScore = 0;

let results = document.querySelector('.results');
let userOutput = document.createElement('div');
let computerOutput = document.createElement('div');
let winnerOutput = document.createElement('div');
let scores = document.createElement('div');
scores.textContent = `${playerScore} : ${computerScore}`;

userOutput.textContent = 'Your choice: ';
computerOutput.textContent = "Computer's choice: ";
winnerOutput.textContent = '';
scores.textContent = '';
results.appendChild(userOutput, computerOutput, winnerOutput, scores);

function setChoice() {
  userChoice = this.textContent.toLowerCase();
  playGame();
}

function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  }

  return 'Computer wins!';
}

function playGame() {
  if (playerScore < 5 && computerScore < 5) {
    const computerChoice = generateComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    userOutput.textContent = 'Your choice: ' + userChoice;
    computerOutput.textContent = "Computer's choice: " + computerChoice;
    winnerOutput.textContent = result;
    if (result == 'You win!') {
      playerScore++;
    } else if (result == 'Computer wins!') {
      computerScore++;
    }
    scores.textContent = `${playerScore} : ${computerScore}`;
  }
  if (computerScore == 5) {
    scores.textContent = 'Computer is the champion!';
  } else if (playerScore == 5) {
    scores.textContent = 'Player is the champion!';
  }
}

rock.addEventListener('click', setChoice);
paper.addEventListener('click', setChoice);
scissors.addEventListener('click', setChoice);
