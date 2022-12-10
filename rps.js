function getComputerChoice() {
  let ComputerChoice = "";
  let ComputerValue = Math.floor(Math.random() * 3 + 1);

  if (ComputerValue == 1) {
    ComputerChoice = "rock";
  } else if (ComputerValue == 2) {
    ComputerChoice = "paper";
  } else if (ComputerValue == 3) {
    ComputerChoice = "scissors";
  }
  return ComputerChoice;
}

function playRound(UserChoice) {
  ComputerChoice = getComputerChoice();

  if (ComputerChoice === "rock") {
    if (UserChoice === "rock") {
      result = "Tie! Both chose rock!";
    } else if (UserChoice === "paper") {
      result = "You win! Paper beats rock!";
      userScore++;
    } else if (UserChoice === "scissors") {
      result = "You Lose! Rock beats scissors!";
      compScore++;
    }
  } else if (ComputerChoice === "paper") {
    if (UserChoice === "rock") {
      result = "You Lose! Paper beats rock!";
      compScore++;
    } else if (UserChoice === "paper") {
      result = "Tie! Both chose Paper!";
    } else if (UserChoice === "scissors") {
      result = "You win! Scissors beats paper!";
      userScore++;
    }
  } else if (ComputerChoice === "scissors") {
    if (UserChoice === "rock") {
      result = "You win! Rock beats Scissors!";
      userScore++;
    } else if (UserChoice === "paper") {
      result = "You Lose! Scissors beats paper!";
      compScore++;
    } else if (UserChoice === "scissors") {
      result = "Tie! Both chose scissors!";
    }
  }

  if (userScore == 5) {
    gameResult = "User wins!";
  } else if (compScore == 5) {
    gameResult = "Computer wins!";
  }

  const rps_ui = document.querySelector('body');
  const RoundDisplay = document.createElement('div');
  
  RoundDisplay.innerHTML = "<div>Round " + round + "</div>" +
    // "<div>You chose " + UserChoice + "</div>" +
    // "<div>Computer chose " + ComputerChoice + "</div>" +
    "<div>" + result + "</div>" +
    "<div>User Score: " + userScore + "</div>" +
    "<div>Computer Score: " + compScore + "</div>" +
    "<div>" + gameResult + "</div>" +
    "<br>";

  rps_ui.appendChild(RoundDisplay);

  if (userScore == 5 || compScore == 5) {
    round = 0;
    userScore = 0;
    compScore = 0;
    gameResult = "";
  }

  round++;
}



let UserChoice = "";
let gameResult = "";
let round = 1;
let userScore = 0;
let compScore = 0;

const rock_btn = document.querySelector('.rock-btn');
rock_btn.addEventListener('click', () => {
  UserChoice = "rock";
  playRound(UserChoice);
})

const paper_btn = document.querySelector('.paper-btn');
paper_btn.addEventListener('click', () => {
  UserChoice = "paper";
  playRound(UserChoice);
})

const scissors_btn = document.querySelector('.scissors-btn');
scissors_btn.addEventListener('click', () => {
  UserChoice = "scissors";
  playRound(UserChoice);
})