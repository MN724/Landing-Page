function getComputerChoice() {
  let ComputerValue = Math.floor(Math.random() * 3 + 1);
  if (ComputerValue == 1) {
    ComputerChoice = "Rock";
    console.log("Computer chose Rock");
  } else if (ComputerValue == 2) {
    ComputerChoice = "Scissors";
    console.log("Computer chose Scissors");
  } else if (ComputerValue == 3) {
    ComputerChoice = "Paper";
    console.log("Computer chose Paper");
  }
  return ComputerChoice;
}

function playRound(UserChoice, ComputerChoice) {
  if (ComputerChoice === "Rock") {
    if (UserChoice === "Rock") {
      result = "Tie! Both chose rock!";
      console.log(result);
    } else if (UserChoice === "Paper") {
      result = "You win! Paper beats rock!";
      console.log(result);
    } else if (UserChoice === "Scissors") {
      result = "You Lose! Rock beats scissors!";
      console.log(result);
    }
  } else if (ComputerChoice === "Paper") {
    if (UserChoice === "Rock") {
      result = "You Lose! Paper beats rock!";
      console.log(result);
    } else if (UserChoice === "Paper") {
      result = "Tie! Both chose Paper!";
      console.log(result);
    } else if (UserChoice === "Scissors") {
      result = "You win! Scissors beats paper!";
      console.log(result);
    }
  } else if (ComputerChoice === "Scissors") {
    if (UserChoice === "Rock") {
      result = "You win! Rock beats Scissors!";
      console.log(result);
    } else if (UserChoice === "Paper") {
      result = "You Lose! Scissors beats paper!";
      console.log(result);
    } else if (UserChoice === "Scissors") {
      result = "Tie! Both chose scissors!";
      console.log(result);
    }
  }
}



let UserChoice = "";
let ComputerChoice = "";

const rock_btn = document.querySelector('.rock-btn');
rock_btn.addEventListener('click', () => {
  UserChoice = "rock";
  console.log("You chose rock");
})

const paper_btn = document.querySelector('.paper-btn');
paper_btn.addEventListener('click', () => {
  UserChoice = "paper";
  console.log("You chose paper");
})

const scissors_btn = document.querySelector('.scissors-btn');
scissors_btn.addEventListener('click', () => {
  UserChoice = "scissors";
  console.log("You chose scissors");
})

ComputerChoice = getComputerChoice();

const play_btn = document.querySelector('.user-input-btns');
play_btn.addEventListener('click', function() {
  playRound(UserChoice, ComputerChoice);
});